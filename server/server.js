import express from 'express';
import choose_strongest_group from './JS-files/choose_one_strongest_group.js';

const app = express();
const port = process.env.PORT || 5000;

const strongest_groups = choose_strongest_group();

app.use(express.json());

app.get('/', (req, res) => {

    res.json(strongest_groups);

});

app.post('/', (req, res) => {

    res.json(req.body);

})

app.listen(port, (err)=>{
    if (err) {

        console.log(err.message);
    
    } else console.log('Server listening on port, ',port);
});