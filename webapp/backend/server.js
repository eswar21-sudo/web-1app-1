const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
  res.send({ message: "Hello from backend!" });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
