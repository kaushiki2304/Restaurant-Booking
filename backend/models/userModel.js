const {model,Schema} = require('../connection');

//schema is a variable
const mySchema =new Schema({
    name: String,
    email: String,
    password: String,
    
});

//creating model and exporting
module.exports=model('users',mySchema);