require('dotenv').config();
const app = require('./app');
const { PORT } = require('./config/server');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
