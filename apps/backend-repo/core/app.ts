import express from 'express';
import cors from 'cors';
import { userRoutes } from '../routes/userRoutes';

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);

// Hello World root route
app.get("/", (_req, res) => {
  res.send("Hello World");
});

export default app;
