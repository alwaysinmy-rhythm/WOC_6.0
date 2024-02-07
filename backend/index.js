const mongoose = require('mongoose');
const UserModel = require('./UsersModel')
const express = require('express');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/IRCTC_USER_AUTH');


const app = express();
app.use(express.json());
app.use(cors());


// const user = mongoose.model('users', UserSchema);
app.get('/' , (req,res)=>{
    res.send('App is working'); 
});

app.post('/Signup', async(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err =>res.json(err)); 
    console.log(req.body)
    
    // try{
    //     const {
    //         FirstName,
    //         LastName,
    //         Emailid,
    //         Password,
    //         Birthdate,
    //         Gender,
    //         address: { street, city, state, zip },
    //       } = req.body;
    //     const person =  new user({
    //         FirstName,
    //         LastName,
    //         Emailid,
    //         Password,
    //         Birthdate,
    //         Gender,
    //         address: { street, city, state, zip },
    //       });
      
    //     let result = await person.save();
    //     result = result.toObject();
    //     res.status(201).json({ message: 'User registered successfully', user: result });
    //     if(result){
    //         delete result.Password;
    //         res.send(req.body);
    //         console.log(result);
    //     }
    //     else {
    //         console.log("User already exist");
    //     }

    // }

    // catch(e){
    //     res.send("Something went wrong");
    // }
});

app.listen(3001 , ()=>{
    console.log('Server is running on 3001'); 
}) ;
