const mongoose = require('mongoose');
const UserModel = require('./UsersModel')
const express = require('express');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/IRCTC_USER_AUTH');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


// const user = mongoose.model('users', UserSchema);
app.get('/' ,cors(), (req,res)=>{
    res.send('App is working'); 
});

app.post('/Signup', async(req,res)=>{
    // .then(users=>res.json(users))
    // .catch(err =>res.json(err)); 
    console.log(req.body)
    
    const temp = {
        FirstName,
        LastName,
        Emailid,
        Password,
        // Birthdate,
        Gender,
        add_street,
        add_city,
        add_state,
        add_zip
    } = req.body;
    console.log(temp);
    const person = new UserModel(temp);
    // const person =  new UserModel({
    //     FirstName,
    //     LastName,
    //     Emailid,
    //     Password,
    //     // Birthdate,
    //     Gender,
    //     add_street,
    //     add_city,
    //     add_state,
    //     add_zip
    // });
    try{
        const existUser = await UserModel.findOne({Emailid:Emailid}); 
        if(existUser){
            return res.json('exist');
        }
        console.log(person);
        let result = await person.save();
        result = result.toObject();
        res.status(201).json({ message: 'User registered successfully', user: result });
        // if(result){
        //     // delete result.Password;
        //     res.send(req.body);
        //     console.log(result);
        // }
        // else {
        //     console.log("User already exist");
        // }

        // res.send({status:"ok"});
    }

    catch(e){
        res.status(500).send('Somthing went Wrong'); 
        //res.send("Something went wrong");
    }
});

app.listen(3001 , ()=>{
    console.log('Server is running on 3001'); 
}) ;
