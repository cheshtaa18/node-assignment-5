const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const entryRoutes = require('./routes/entryRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/entries', entryRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/crud-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB:', err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
