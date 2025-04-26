import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.post("/projects", async (req, res) => {
    const project = req.body; // user sends body

    if(!project.name) {
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }
    const newProject = new project(project)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct})
    } catch(error) {
        console.error("Error in creating", error.message);
        res.status(500).json({ success: false, message: "Server error"})
    }
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 ");
});



