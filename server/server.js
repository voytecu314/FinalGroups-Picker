import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';

import { auth, adminAuth } from './pass-encryption/passENC.js';
import countConnections from './JS-files/choices-connections.js';
import membersModel from './model/membersModel.js';
import choicesModel from './model/choicesModel.js';
import choose_strongest_group from './JS-files/choose_one_strongest_group.js';
//const members=["Allan","Andrija","Ann","Carlos","Egle","Felix","Fin","Gerald","Haakim","Marco","Paul","Uche","Vonn","Wais","Wojtek"];
//const test = ['test']

const app = express();

dotenv.config();
const port = process.env.PORT;
const DB_CONNECTION_URL = process.env.MONGO;

mongoose.connect(DB_CONNECTION_URL)
                .then(()=>console.log('Connected to DB'))
                .catch((err)=>console.log(err.message));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'));
app.use(cors());

app.get('/choices',async (req, res) => {
	
    const result = await choicesModel.find({'_id':'640a20003a85ef701f007bf2'});
    res.json(result[0].choices);
});

app.get('/members',async (req, res) => {
   
    const result = await membersModel.find({'_id':'6409fdcb3a85ef701f007bf0'});
    res.json(result[0].names);

});

app.post('/members', async (req, res) => {

    await membersModel.create(req.body);
    res.send('Success');
        
}); 

app.post('/login', auth);
app.post('/login/admin', adminAuth);

app.put('/votes', async (req, res) => {

    try{
        
    	const update = await choicesModel.findByIdAndUpdate({'_id':'640a20003a85ef701f007bf2'},{ [`choices.${req.body.name}`]: req.body.choices });
        
    	res.json('HI from Server');
    } catch(err) {
    	console.log(err);
    	res.json(err);
    }
});

app.post('/points', async (req, res) => {

    const result = await membersModel.find();
    res.redirect('http://localhost:3000/');
        
});


app.get('/show-groups', async (req, res)=>{
    const mmbrs = await membersModel.find({'_id':'6409fdcb3a85ef701f007bf0'});
    const result = await choicesModel.find({'_id':'640a20003a85ef701f007bf2'});
    const members = mmbrs[0].names;
    //const choices = result[0]['_doc' ]; //?? model-Object
    const choices = result[0].choices;
    delete choices['_id'];
    delete choices['__v'];
   
    const connections = countConnections(choices, members);
    const setGroups = [];
    const strongest_groups = choose_strongest_group(choices, connections, members, setGroups);

    res.json(strongest_groups);

});

app.listen(port, (err)=>{
    if (err) {

        console.log(err.message);
    
    } else console.log('Server listening on port, ',port);
});
