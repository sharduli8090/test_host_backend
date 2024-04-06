// app.js

const express = require('express');
const app = express();
const helloRoutes = require('./routes/helloRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/hello', helloRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

