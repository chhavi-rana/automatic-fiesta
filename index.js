const express = require('express');
const { sign } = require('jsonwebtoken');

const app = express();
const port = 3000;

app.get('/generate-token', (req, res) => {
  // Mock user data for the purpose of this example
  const user = {
    name: 'Chhavi Rana',
    email: 'chhavi.rana@aatmunn.com',
    
    version: 1,
  };

  const readmeJwtSecret = 'EyFO3LKKNpwpoDO9joWQELNDrXcNPQYx'; 
  const authToken = sign(user, readmeJwtSecret);

  res.json({ authToken });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
