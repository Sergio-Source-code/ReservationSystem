// File Description: Connection handler to database with Mongoose.

// Libraries to Import:
const { default: mongoose } = require('mongoose');

// Connection Component (Goes into App.js):
const ConnectDB = () => {
    // Connection string to MongoDB:
    const dbURI = "mongodb+srv://admin:justsurviving@cluster0.k1uukak.mongodb.net/?retryWrites=true&w=majority"; // This is our mongoDB online url.
    // Mongoose API to Connect to DB:
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true}) // Note, this is simlar to an async function, don't got to specify async
        .then((result) => app.listen(4000))
        .catch((err) => console.log(err));
};

export default ConnectDB;