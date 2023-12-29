require('dotenv').config();


const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// products route

// app.get('/api/v1/products', (req, res) => {
//   res.status(200).json({ success: true, msg: 'products route' });
// });


// 404 middleware
app.use(notFoundMiddleware);
// error middleware
app.use(errorMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();