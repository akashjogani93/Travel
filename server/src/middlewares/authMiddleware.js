// src/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/server');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded JWT payload to request object
    next();
  } catch (err) 
  {
    return res.status(401).json({ message: 'Access Denied: Invalid token' });
  }
};

module.exports = authenticateJWT;
