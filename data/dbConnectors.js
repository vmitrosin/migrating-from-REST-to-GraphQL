import mongoose from 'mongoose';

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://public:muie2utoti@cluster0.4plyfv2.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
});

const Contacts = mongoose.model('Contact', ContactSchema);

export {Contacts};