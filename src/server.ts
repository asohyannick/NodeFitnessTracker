import express, { Request, Response, Application} from 'express';
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/test', (_req: Request, res:Response) => {
    res.status(200).json({message: "Hello world"})
})
app.listen(3000, () => {
    console.log('Server is running on port 3000...')
})