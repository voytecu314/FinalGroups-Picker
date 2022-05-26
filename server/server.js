import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from 'morgan';

import membersModel from './model/membersModel.js';
import choose_strongest_group, { members } from './JS-files/choose_one_strongest_group.js';

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://voytecu:xXyYzZ123@cluster0.qtglk.mongodb.net/EssenceGroups?retryWrites=true&w=majority', ()=>console.log('Connected to DB'));

const strongest_groups = choose_strongest_group();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'));
app.use(cors());

app.get('/members',async (req, res) => {

    const result = await membersModel.find();
    res.json(result[0].names);

});

/* app.post('/members', async (req, res) => {

    await membersModel.create(req.body);
    res.send('Success');
        
});
 */
app.post('/login', async (req, res) => {

    try{
        const result = await membersModel.find();
        console.log(result[0].hashes[0]);
        console.log(req.body.name,': ',req.body.password);
        res.status(200).json('OK from server!');
            
    } catch (err) {
        console.log(err.message);
        res.status(404).redirect('http://localhost:3000/');
    }
    
});

app.post('/points', async (req, res) => {

    const result = await membersModel.find();
    console.log(req.body);
    res.redirect('http://localhost:3000/');
        
});

app.listen(port, (err)=>{
    if (err) {

        console.log(err.message);
    
    } else console.log('Server listening on port, ',port);
});