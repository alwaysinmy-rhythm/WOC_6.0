const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/IRCTC_USER_AUTH', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


//Schema
const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required:true,
    },
    LastName: {
        type: String,
    },
    Emailid: {
        type: String,
        required:true,
        unique:true,
    },
    Password: {
        type:String,
        required:true,
        unique:true,
    },
    Birthdate: Date,
    Gender: {
        type: String,
        enum: ['Male', 'Female', 'Other', 'PreferNottosay'], 
    },
    // address: {
    //     street: String,
    //     city: String,
    //     state:String,
    //     zip: Number,
    // },
    add_street : {
        type:String
    },
    add_city : {
        type:String
    },
    add_state : {
        type:String
    },
    add_zip : {
        type:String
    },
    
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
// export default UserSchema;