const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const doctor = require('./Doctor');

const connectionString = 'mongodb+srv://23010101605:mohit123@cluster0.pbnz1h4.mongodb.net/FullStackProject?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString).then(()=>{

    const app = express();

    console.log("Connection to Doctor's DB Established...");

    app.use(bodyParser.urlencoded({extended: false}));

    app.get('/doctors', async(req, res)=>{
        const result = await doctor.find();
        res.json(result);
    });

    app.get('/doctors/:doctorID', async(req, res)=>{
        const ID = parseInt(req.params.doctorID, 10);
        const result = await doctor.findOne({doctorID: ID})
        res.json(result);
    });

    app.post('/doctors/add', async(req, res)=>{
        const data = new doctor(req.body);
        const result = await result.save();
        res.json(result);
    });

    app.delete('/doctors/:doctorID', async(req, res)=>{
        const ID = parseInt(req.params.doctorID);
        const result = await doctor.deleteOne({doctorID: ID});
        res.json(result);
    });

    app.patch('/doctors/update/:doctorID', async(req, res)=>{
        const ID = parseInt(req.params.doctorID);
        const result = await doctor.findOneAndUpdate({doctorID: ID}, req.body, {new: true});
        res.json(result);
    });

    app.listen(7000, ()=>{
        console.log("Server for Doctors Initialised...");
    });
});