import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); 

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});