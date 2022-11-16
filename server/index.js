const path = require('path');
const express = require("express");
const connectDB = require("../client/src/config/db")
const { rmSync } = require('fs');
const PORT = process.env.PORT || 3001;
const toppings = require('./routes/api/toppings');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});