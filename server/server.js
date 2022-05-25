import express from 'express';
import logger from 'morgan';
import choose_strongest_group from './JS-files/choose_one_strongest_group.js';

const app = express();
const port = process.env.PORT || 5000;

const fin = process.env.REACT_APP_FIN;
console.log(fin);

const strongest_groups = choose_strongest_group();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'));

app.get('/', (req, res) => {

    res.json(strongest_groups);

});

app.post('/password', (req, res) => {

    console.log(fin);
    //res.send({well: 'done'});
    res.send(fin);

})

app.listen(port, (err)=>{
    if (err) {

        console.log(err.message);
    
    } else console.log('Server listening on port, ',port);
});