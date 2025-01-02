const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/SignIn'); 

const router = express.Router();

router.post('/signup', async (req, res) => { 
  const { fullName, email, password, role } = req.body; 
  try { 
    const existingUser = await User.findOne({ email }); 
    if (existingUser) { 
      return res.status(400).json({ error: 'Email already exists' }); 
    } 
    
    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = new User({ fullName, email, password: hashedPassword, role }); 
    await newUser.save(); 
    res.status(201).json({ message: 'User registered successfully', role }); 
  } catch (error) { 
    res.status(400).json({ error: 'Error registering user' }); 
  } 
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(400).json({ error: 'Error signing in' });
  }
});

module.exports = router;