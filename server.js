const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://myAtlasDBUser:lzCOIn96k4y4GigX@myatlasclusteredu.robbx.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
const visitorSchema = new mongoose.Schema({
    name: String,
  });
  
const Visitor = mongoose.model('Visitor', visitorSchema);
  
app.use(express.json());

aapp.get('/visitors', async (req, res) => {
  const visitors = await Visitor.find();
  res.json(visitors);
});

app.post('/visitors', async (req, res) => {
  const newVisitor = new Visitor(req.body);
  await newVisitor.save();
  res.json(newVisitor);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
