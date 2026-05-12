import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { createServer as createViteServer } from "vite";
import { z } from "zod";

// Schema & Model
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", MessageSchema);

// Validation
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Database Connection
  const MONGODB_URI = process.env.MONGODB_URI;
  if (MONGODB_URI) {
    mongoose
      .connect(MONGODB_URI)
      .then(() => console.log("Connected to MongoDB Atlas"))
      .catch((err) => console.error("MongoDB connection error:", err));
  } else {
    console.warn("MONGODB_URI not found. Database features will not work.");
  }

  // API Routes
  app.post("/api/contact", async (req, res) => {
    try {
      if (!MONGODB_URI) {
        return res.status(503).json({ 
          error: "Database connection not configured. Please add MONGODB_URI to secrets." 
        });
      }

      const validatedData = ContactSchema.parse(req.body);
      const newMessage = new Message(validatedData);
      await newMessage.save();

      res.status(201).json({ 
        message: "Your message has been received! I will get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.issues[0].message });
      }
      console.error("Contact error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", db: !!MONGODB_URI });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
