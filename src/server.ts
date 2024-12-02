import express from 'express';
import { json } from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/user/user.routes';
import courseRoutes from './modules/course/course.routes';


dotenv.config({ path: './.env' }); // Especifica o caminho completo para o .env


const app = express();
app.use(json());

// Rotas principais
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/course', courseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: localhost:${PORT}`);
});