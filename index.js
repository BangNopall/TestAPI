import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} http://localhost:5000`);
});