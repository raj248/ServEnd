import express from 'express';
import homeRouter from './routes/home.route.js';
import dummyRouter from './routes/dummy.route.js';
import authRouter from './routes/auth.route.js';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/dummy', dummyRouter);

export default app;
