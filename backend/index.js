const express = require('express');
const BookingRouter= require("./routers/bookingRouter");
const UserRouter= require("./routers/userRouter");

const cors= require('cors');

const port =5000;

//the next line is for intilize express app
const app= express();

//middleware
app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173']
}));
app.use('/booking',BookingRouter);
app.use('/user',UserRouter);



app.listen(port, () => {
    console.log('server started');
})