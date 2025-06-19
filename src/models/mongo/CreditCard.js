import mongoose from "mongoose";

const creditCardSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true, unique: true },
  cardHolder: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: String, required: true },
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model("CreditCard", creditCardSchema);
