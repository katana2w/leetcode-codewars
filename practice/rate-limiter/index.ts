import express, { Request, Response } from "express";
import { rateLimiter } from './rate-limiter';

const app = express();
const PORT = 4600;

app.use(rateLimiter)

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome!" });
});

app.listen(PORT, () => console.log('Server running...'));
