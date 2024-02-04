const express = require('express');
const Model = require('../models/bookingModel');

// creating a router
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
//: this denotes url parameter
router.get('/getbyrestaurant/:restaurant',(req,res)=>{
    console.log(req.params.restaurant);
    Model.find({restaurant: req.params.restaurant})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getbyuser/:user', (req, res) => {
   Model.findOne({user: req.params.user})
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});
router.get('/getbydate/:date', (req, res) => {
   Model.findOne({date: req.params.date})
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

router.get('/getbyduration/:duration', (req, res) => {
   Model.findOne({duration: req.params.duration})
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});
router.get('/getbyadditional/:additional', (req, res) => {
   Model.findOne({additional: req.params.additional})
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});
router.get('/getbydishes/:dishes', (req, res) => {
   Model.findOne({dishes: req.params.dishes})
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});



router.post("/authenticate", (req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message: 'Login Failed'})
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;