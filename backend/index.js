const mongoose = require('mongoose');
const users = require('./UsersModel')
const express = require('express');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/IRCTC_USER_AUTH');


const app = express();
app.use(express.json());
app.use(cors());


app.get('/' , (req,res)=>{
    res.send('App is working'); 
});

app.post('/login' , async(req,res)=>{
    console.log(req.body);
    const {
        EmailId,
        Password
    } = req.body ; 
    try{
        const check = await users.findOne({EmailId : EmailId});
        if( check ){
            if(check.Password == Password) res.json("LoginPass");
            else res.json('LoginFail'); 
        }
        else {
            res.json("Notexist");
        }
    }
    catch(e){
        console.log(e);
        res.send("Something went wrong");
    }
})

app.post('/Signup', async(req,res)=>{
    console.log(req.body)
    
    try{
        const {
            FirstName,
            LastName,
            EmailId,
            Password,
            Birthdate,
            Gender,
            Add_street,
            Add_city,
            Add_state,
            Add_zip,
        } = req.body;
        const person =  new users({
            FirstName,
            LastName,
            EmailId,
            Password,
            Birthdate,
            Gender,
            Add_street,
            Add_city,
            Add_state,
            Add_zip,
        });
        console.log(person);
        let check = await users.findOne({EmailId: EmailId}); 
        if( check){
            console.log('EmailId already Exist')
            res.json('Emailid Already Exist')
        }
        else{
            let result = await person.save();
            result = result.toObject();
            res.status(201).json({ message: 'User registered successfully', users: result });
        }
    }

    catch(e){
        console.log(e);
        res.send("Something went wrong");
    }
});


app.get('/user/:email', async (req, res) => {
    try {
      const userEmail = req.params.email;
  
      // Find user in the database based on the provided email
      const user = await users.findOne({ EmailId: userEmail });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Return user data
      res.json(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(3001 , ()=>{
    console.log('Server is running on 3001'); 
}) ;