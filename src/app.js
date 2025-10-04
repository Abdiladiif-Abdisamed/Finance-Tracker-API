import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

import errorHandler from './middlewares/error.js';
import logger from './middlewares/logger.js';

import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

app.use('/auth', authRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use(errorHandler);

export default app;
