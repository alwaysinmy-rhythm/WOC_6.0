const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rdhmpanchal:1234@cluster0.hb7ro5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
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