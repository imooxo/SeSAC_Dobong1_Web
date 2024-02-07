const express = require('express');
const { route } = require('./routes/user');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

// body 정보 미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});
// axios post 실습
app.get('/axios-post', (req, res) => {
  res.render('axiosPost');
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});