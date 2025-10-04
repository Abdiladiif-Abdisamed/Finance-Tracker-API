import { Schema, model, Types } from 'mongoose';

const transactionSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

export default model('Transaction', transactionSchema);
