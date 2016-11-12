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


app.get('/2b', (req, res) => {
  try{

    const fullfio = (req.query.fullname || 'Invalid fullname');
    if(fullfio == 'Invalid fullname'){
      return res.send('Invalid fullname');
    }


    //const fio = new RegExp('([А-ЯЁA-Z][\/\\w\/]+){1,1}[ ]{0,1}([А-ЯЁA-Z][а-яёa-z]+){0,1}[ ]{0,1}([А-ЯЁA-Z][а-яёa-z]+){0,1}', 'i');
    //const halffio = fullfio.match(fio);
    //console.log(halffio[1]);
    //return res.json({halffio,});
    var fres = '';

    const wf = fullfio.split(' ');
    if(wf.length > 3)
      return res.send('Invalid fullname');


    for(var i=wf.length - 1 ; i>=0 ; i--){
      if(fres == '' && wf[i]!= null){
        fres = wf[i];
        console.log(wf[i]);
        break;
      }
    }
    for(var j =0;j<i;j++){

        if(wf[j]!= null){
          fres = fres + ' ' + wf[j][0] + '.';
        }

    }

    if(fres == '')
      fres = 'Invalid fullname';

    res.send(fres);
   /*return res.json({
    wf,
    len : wf.length
    });
    */
    //
    //res.json({username});
}catch(err){
  console.log(err);
  res.send(err);
}
});



app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
