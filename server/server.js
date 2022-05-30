import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';

import { auth, adminAuth } from './pass-encryption/passENC.js';
import countConnections from './JS-files/choices-connections.js';
import membersModel from './model/membersModel.js';
import choicesModel from './model/choicesModel.js';
import choose_strongest_group, { members } from './JS-files/choose_one_strongest_group.js';

const app = express();


dotenv.config();
const port = process.env.PORT;
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;

mongoose.connect(DB_CONNECTION_URL)
                .then(()=>console.log('Connected to DB'))
                .catch((err)=>console.log(err.message));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'));
app.use(cors());

app.get('/choices',async (req, res) => {

    const result = await choicesModel.find();
    res.json(result[0]);

});

app.get('/members',async (req, res) => {

    const result = await membersModel.find();
    res.json(result[0].names);

});

app.post('/members', async (req, res) => {

    await membersModel.create(req.body);
    res.send('Success');
        
}); 

app.post('/login', auth);
app.post('/login/admin', adminAuth);

app.put('/votes', async (req, res) => {

    const update = await choicesModel.findOneAndUpdate({'_id':'6290fd521d7c710dc5a595f3'}, req.body);
    console.log(req.body);
    res.json('HI from Server');
});

app.post('/points', async (req, res) => {

    const result = await membersModel.find();
    console.log(req.body);
    res.redirect('http://localhost:3000/');
        
});


app.get('/show-groups', async (req, res)=>{

    const result = await choicesModel.find();

    const choices = result[0]['_doc' ];
    delete choices['_id'];
    delete choices['__v'];
    
    const connections = countConnections(choices, members);

    const strongest_groups = choose_strongest_group(choices, connections);

    res.json(strongest_groups);

});

app.listen(port, (err)=>{
    if (err) {

        console.log(err.message);
    
    } else console.log('Server listening on port, ',port);
});