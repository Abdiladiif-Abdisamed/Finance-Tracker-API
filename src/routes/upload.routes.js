import { Router } from 'express';
import multer from 'multer';
import auth from '../middlewares/auth.js';
import { uploadProfilePicture } from '../controllers/upload.controller.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post('/profile-picture', auth, upload.single('file'), uploadProfilePicture);
export default router;
