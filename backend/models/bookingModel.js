const {model,Schema} = require('../connection');

//schema is a variable
const mySchema =new Schema({
    restaurant: Object,
    username: String,
    date: Date,
    duration: String,
    additional: String,
    dishes: Array, 
    

});

//creating model and exporting
module.exports=model('bookings',mySchema);