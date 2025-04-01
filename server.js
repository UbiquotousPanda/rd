const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://myAtlasDBUser:lzCOIn96k4y4GigX@myatlasclusteredu.robbx.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model('Item', itemSchema);

app.use(express.json());

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
