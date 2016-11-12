import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});




app.get('/2a', (req, res) => {
  try{

    const sum = (+req.query.a || 0) + (+req.query.b || 0);
    console.log(sum);
    res.send(sum.toString());

  }catch(err){
    console.log(err);
    res.send(err);
  }
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
