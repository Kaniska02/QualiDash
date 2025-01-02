require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const signInRoutes = require('./routes/SignIn');
const feedbackRoutes = require('./routes/FeedbackForm'); 
const contactRoutes = require('./routes/Contact'); 

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.use('/api/auth', signInRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api', contactRoutes); 


app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
