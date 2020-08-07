import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  const users = [{ name: 'Philipe' }, { name: 'lala' }];
  return res.json(users);
});

const port = process.env.PORT || 3333;
app.listen(port);
