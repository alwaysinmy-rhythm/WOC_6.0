const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/IRCTC_USER_AUTH', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


//Schema
const BookingSchema = new mongoose.Schema({
    EmailId: {
        type: String,
        default:"",
        required:true,
        unique:true,
    },
    TrainNo: {
        type:String,
        required:true,
    },
    // Birthdate: Date,
    TrainName: {
        type: String,
        default:"",
    },
    
    FromStation : {
        type:String,
        default:"",
        required:true
    },
    ToStation : {
        type:String,
        default:"",
        required:true
    },
    Fare : {
        type:String,
        default:"",
        required:true
    },
    Class : {
        type:String,
        default:"",
        required:true
    },
    TrainDate : {
        type:Date,
        default:"",
    },

    
});

const BookingModel = mongoose.model('booking', BookingSchema);
module.exports = BookingModel;
// export default UserSchema;