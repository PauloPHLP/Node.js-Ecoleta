import express from 'express';

const app = express();

app.get('/users', (req, resp) => {
  
  resp.json([
    'Paulo',
    'Fabio',
    'Ceiça'
  ]);
});

app.listen(3333);