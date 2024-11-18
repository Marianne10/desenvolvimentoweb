import express from 'express';
import bodyParser from 'body-parser';
import produtoRoutes from './routes/produto.routes';

const app = express();
app.use(bodyParser.json());
app.use('/produtos', produtoRoutes);

export default app;
