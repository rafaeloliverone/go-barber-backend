import express, { request, response } from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.post('/', (request, response) => {
  const { name, email } = request.body;

  response.json({ message: 'Hello' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
