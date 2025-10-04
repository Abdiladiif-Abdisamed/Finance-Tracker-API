// admin controller
import User from '../models/user.js';
import Transaction from '../models/Transaction.js';

export async function overview(req, res, next) {
  try {
    const totalUsers = await User.countDocuments();
    const topCategories = await Transaction.aggregate([
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
      { $sort: { total: -1 } },
      { $limit: 5 }
    ]);
    res.json({ totalUsers, topCategories });
  } catch (e) { next(e); }
}
