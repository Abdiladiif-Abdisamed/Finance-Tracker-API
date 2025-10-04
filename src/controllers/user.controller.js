import User from '../models/user.js';

/**
 * GET /users/me
 * Returns logged-in user's basic info
 */
export async function me(req, res, next) {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (e) {
    next(e);
  }
}

/**
 * PUT /users/me
 * Update logged-in user's profile (name, email)
 */
export async function updateMe(req, res, next) {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (e) {
    next(e);
  }
}

/**
 * DELETE /users/me
 * Delete logged-in user account
 */
export async function deleteMe(req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'Account deleted' });
  } catch (e) {
    next(e);
  }
}
