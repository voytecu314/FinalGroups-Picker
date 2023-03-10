import crypto from 'crypto';
import membersModel from '../model/membersModel.js';

export const auth = async (req, res) => {

    const salt = 'bb5jf08fa5d0';

    try{
        const result = await membersModel.find({'_id':'6409fdcb3a85ef701f007bf0'});

        const index = result[0].names.indexOf(req.body.name);

        const hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`);

        if(hash==result[0].hashes[index]){
            res.status(200).json({name: result[0].names[index],auth: true});
        } else {
            res.status(401).json({name: result[0].names[index],auth: false});
        }
            
    } catch (err) {
        console.log(err.message);
        res.status(404).redirect('http://localhost:3000/');
    }

   
}

export const adminAuth = async (req, res) => {

    const salt = 'bb5jf08fa5d0';

    try{
        const result = await membersModel.find({'_id':'6409fdcb3a85ef701f007bf0'});

        const hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`);

        if(hash==result[0].admin){
            res.status(200).json({name: "admin",auth: true});
        } else {
            res.status(401).json({name: "admin",auth: false});
        }
            
    } catch (err) {
        console.log(err.message);
        res.status(404).redirect('http://localhost:3000/');
    }

   
}
