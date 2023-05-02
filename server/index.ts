import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path'
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

app.get("/api/hello", (req: Request, res: Response) => {
    res.json({ message: 'Hello World here!' });
})

app.get('*', (req: Request, res:Response) => {
    console.log('Serve static site.')
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})