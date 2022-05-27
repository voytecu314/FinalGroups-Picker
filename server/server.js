import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from 'morgan';
import auth from './pass-encryption/passENC.js';

import membersModel from './model/membersModel.js';
import choicesModel from './model/choicesModel.js';
import choose_strongest_group, { members } from './JS-files/choose_one_strongest_group.js';

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://voytecu:xXyYzZ123@cluster0.qtglk.mongodb.net/EssenceGroups?retryWrites=true&w=majority', ()=>console.log('Connected to DB'));

app.use(express.json());
app.use(express.urlencoded({extended:false}))
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

    await choicesModel.create(req.body);
    res.send('Success');
        
}); 

app.post('/login', auth);

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
    console.log(choices);
    const connections = {};

    for (const group in choices) {
        
           connections[group] = [];
            
                for (const member in choices) {
                      
                        if(group!==member){
                            
                            connections[group].push({
                                [member]:(parseInt(choices[group][members.indexOf(member)][member])+
                                         parseInt(choices[member][members.indexOf(group)][group]))/20})
                        
                        }else  connections[group].push({[member]:null});
                     
                } 
        
    }

    const strongest_groups = choose_strongest_group(choices, connections);

    

    res.json(strongest_groups);

});

app.listen(port, (err)=>{
    if (err) {

        console.log(err.message);
    
    } else console.log('Server listening on port, ',port);
});