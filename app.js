const express = require('express');
const app = express();
const morgan = require('morgan');

//middleware
app.use(express.json());
app.use(morgan('tiny'));


require('dotenv/config');
const api = process.env.API_URL;



const PORT = 3000;

app.get(`${api}/books`, (req, res) => {
    const books = {
        id: 1,
        name: 'the best',
        image: 'ooooo'
    }
    res.send(books)
})

app.post(`${api}/books`, (req, res) => {
  const newBook = req.body;
    res.send(newBook)
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})