import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/invoicing")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Invoice Schema
const invoiceSchema = new mongoose.Schema({
  clientName: String,
  amount: Number,
  date: Date,
  status: String,
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

// Create Invoice
app.post("/invoices", async (req, res) => {
  const invoice = new Invoice(req.body);
  await invoice.save();
  res.status(201).send(invoice);
});

// Get Invoices
app.get("/invoices", async (req, res) => {
  const invoices = await Invoice.find();
  res.send(invoices);
});

// ... other CRUD operations ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
