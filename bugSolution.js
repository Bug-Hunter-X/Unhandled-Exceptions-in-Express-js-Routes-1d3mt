const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Missing name or email' });
  }
  // ... rest of the code ...
});

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database interaction to fetch user
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Failed to fetch user' });
  }
});