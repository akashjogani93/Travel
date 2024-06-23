const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { JWT_SECRET } = require('../config/server');

exports.signUp = (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: 'Server error' });

    const newUser = { name, email, password: hashedPassword };

    User.create(newUser, (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ message: 'User created successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  // User.findByEmail(email, (err, users) => {
  //   if (err) return res.status(500).json({ error: 'Database error' });
  //   if (users.length === 0) return res.status(401).json({ error: 'Invalid email or password' });

  //   const user = users[0];
  //   bcrypt.compare(password, user.password, (err, isMatch) => {
  //     if (err) return res.status(500).json({ error: 'Server error' });
  //     if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

      // const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      const token = jwt.sign({ id: email, email: password }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
  //   });
  // });
};


exports.viewUser = (req, res) => {
  // Assuming authenticateJWT middleware sets req.user with decoded JWT payload
  // const { id, email } = req.user;
  const id='10';
  const email='akashjogani93@gmail.com';
  // Fetch additional user details from database if needed
  // Example: const user = User.findById(id);

  res.json({
    id,
    email,
    // Add other user details as needed
  });
};