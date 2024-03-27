const mongoose = require('mongoose');
const users = require('./UsersModel')
const bookings = require('./BookingModel.js')
const express = require('express');
const cors = require('cors');
const PORT = 3001;


const app = express();
app.use(express.json());
const corsOptions ={
    origin:'https://irctc-three.vercel.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://rdhmpanchal:1234@cluster0.hb7ro5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


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


app.post('/booking', async(req,res)=>{
    console.log(req.body)
    
    try{
        const {
            EmailId,
            TrainNo,
            TrainName,
            FromsStation,
            ToStation,
            Fare,
            Class,
            TrainDate
        } = req.body;
        const bill =  new bookings({
            EmailId,
            TrainNo,
            TrainName,
            FromsStation,
            ToStation,
            Fare,
            Class,
            TrainDate
        });
        console.log(bill);
        let check = await bookings.findOne({EmailId: EmailId , TrainNo:TrainNo , TrainDate:TrainDate}); 
        if( check){
            console.log('Booking already Exist')
            res.json('Booking Already Exist')
        }
        else{
            let result = await bill.save();
            result = result.toObject();
            res.status(201).json({ message: 'Booking registered successfully', bookings: result });
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

app.post('/update_profile', async (req,res)=>{
    console.log(req.body); 
    const result = await users.updateOne(req.body.userdetails);
    res.json('keep going');
})

app.listen(PORT , ()=>{
    console.log('Server is running on PORT'); 
}) ;