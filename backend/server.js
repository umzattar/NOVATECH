import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Contact from "./models/Contact.js";

dotenv.config();
//create new
const app = express();
//allow any req
app.use(cors());
//allow  API read json
app.use(express.json());

// CONNECT MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected "))
  .catch(err => console.log("DB ERROR:", err));


// API ROUTE
app.post("/api/contact", async (req, res) => {
  try {
    console.log("REQUEST BODY:", req.body);

    const newContact = new Contact(req.body);
    await newContact.save();

    res.json({ success: true });
  } catch (err) {
    console.log("SAVE ERROR:", err);
    res.json({ success: false, error: err });
  }
});


// START SERVER
app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
