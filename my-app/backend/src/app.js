import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // precisa da extensão .js

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);

export default app;

