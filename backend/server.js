import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import e from "express";

dotenv.config();
connectDB()

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use('/api/users', userRoutes)
app.get('/', (req, res) => res.send('server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server stared on port ${port}`));