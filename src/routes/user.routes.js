import { Router } from 'express';
import auth from '../middlewares/auth.js';
import isAdmin from '../middlewares/isAdmin.js';
import { me, updateMe, deleteMe } from '../controllers/user.controller.js';
import User from '../models/user.js';

const router = Router();

// ✅ Every user must be logged in to use these
router.use(auth);

/**
 * @route GET /users/me
 * @desc Get current logged-in user profile
 */
router.get('/me', me);

/**
 * @route PUT /users/me
 * @desc Update own profile (name, email)
 */
router.put('/me', updateMe);

/**
 * @route DELETE /users/me
 * @desc Delete own account
 */
router.delete('/me', deleteMe);

// ================= ADMIN ONLY =================

/**
 * @route GET /users
 * @desc Get all users (admin only)
 */
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (e) {
    next(e);
  }
});

/**
 * @route DELETE /users/:id
 * @desc Delete a user by ID (admin only)
 */
router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (e) {
    next(e);
  }
});

export default router;
