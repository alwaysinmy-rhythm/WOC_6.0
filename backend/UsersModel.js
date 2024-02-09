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
        default:"",
    },
    LastName: {
        default:"",
        type: String,
    },
    Emailid: {
        type: String,
        // default:"",
        // required:true,
        unique:true,
    },
    Password: {
        type:String,
        // required:true,
        // unique:true,
    },
    // Birthdate: Date,
    Gender: {
        type: String,
        default:"",
    },
    
    add_street : {
        default:"",
        type:String
    },
    add_city : {
        default:"",
        type:String
    },
    add_state : {
        default:"",
        type:String
    },
    add_zip : {
        default:"",
        type:String
    },
    
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
// export default UserSchema;