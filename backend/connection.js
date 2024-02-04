const mongoose= require('mongoose');

//url from mongodb and this is for connection
const url="mongodb+srv://kaushikigupta:12345678k@cluster0.6umt6as.mongodb.net/mydatabase?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports= mongoose;