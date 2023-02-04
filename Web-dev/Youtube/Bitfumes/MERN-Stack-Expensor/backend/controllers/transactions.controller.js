import Transaction from "../model/transaction.model.js";

export const createTransaction = async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new Transaction({
    amount,
    description,
    date,
  });
  await transaction.save();
  res.json({ data: transaction });
};

export const getTransaction = async (req, res) => {
  const transaction = await Transaction.find().sort({ createdAt: -1 }).exec();
  res.json({ data: transaction });
};
