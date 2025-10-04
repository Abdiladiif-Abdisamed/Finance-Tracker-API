import cloudinary from '../config/cloudinary.js';
import User from '../models/user.js';

export async function uploadProfilePicture(req, res, next) {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file' });

    const b64 = req.file.buffer.toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;
    const result = await cloudinary.uploader.upload(dataURI, { folder: 'finance_tracker/avatars' });

    const user = await User.findByIdAndUpdate(req.user.id, { avatarUrl: result.secure_url }, { new: true });
    res.json({ avatarUrl: user.avatarUrl });
  } catch (e) { next(e); }
}
