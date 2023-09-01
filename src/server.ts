import express from 'express';
import cors from 'cors';
import http from 'http';
import logger from 'morgan';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(logger('dev'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Welcome to BAM API');
});

app.use(router);

const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`App is listening to port: ${port}`));
