const loginUser = (req, res) => {
    // Replace this with actual authentication logic
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Login failed' });
    }
  };
  
  module.exports = {
    loginUser,
  };