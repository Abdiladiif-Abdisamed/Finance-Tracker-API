// transaction controller

import Transaction from '../models/Transaction.js';

export async function create(req, res, next) {
  try {
    const data = req.validated;
    const tx = await Transaction.create({ user: req.user.id, ...data, date: new Date(data.date) });
    res.status(201).json(tx);
  } catch (e) { next(e); }
}

export async function list(req, res, next) {
  try {
    const txs = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
    res.json(txs);
  } catch (e) { next(e); }
}

export async function update(req, res, next) {
  try {
    const data = req.validated;
    if (data.date) data.date = new Date(data.date);
    const updated = await Transaction.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, data, { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (e) { next(e); }
}

export async function remove(req, res, next) {
  try {
    const del = await Transaction.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!del) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (e) { next(e); }
}

export async function monthlySummary(req, res, next) {
  try {
    const { year, month } = req.query;
    if (!year || !month) return res.status(400).json({ message: 'year & month required' });

    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 1);

    const agg = await Transaction.aggregate([
      { $match: { user: req.user.id, date: { $gte: start, $lt: end } } },
      { $group: { _id: { category: '$category', type: '$type' }, total: { $sum: '$amount' } } }
    ]);

    res.json({ year, month, summary: agg });
  } catch (e) { next(e); }
}
