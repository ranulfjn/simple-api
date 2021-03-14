import express from 'express';
import bodyParser from 'body-parser';
import playersRoute from './routes/players.js'

const app = express();
const PORT=3000;

app.use(bodyParser.json())

app.use('/players',playersRoute)


app.listen(PORT,()=>{console.log(`Server running on port http://localhost:${PORT}`)})