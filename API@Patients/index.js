const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const patient = require('./Patient');

const connectionString = 'mongodb+srv://23010101605:mohit123@cluster0.pbnz1h4.mongodb.net/FullStackProject?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString).then(()=>{

    const app = express();

    console.log("Connection to patient's DB Established...");

    app.use(bodyParser.urlencoded({extended: false}));

    app.get('/patients', async(req, res)=>{
        const result = await patient.find();
        res.json(result);
    });

    app.get('/patients/:patientID', async(req, res)=>{
        const ID = parseInt(req.params.patientID, 10);
        const result = await patient.findOne({patientID: ID})
        res.json(result);
    });

    app.post('/patients/add', async(req, res)=>{
        const data = new patient(req.body);
        const result = await result.save();
        res.json(result);
    });

    app.delete('/patients/:patientID', async(req, res)=>{
        const ID = parseInt(req.params.patientID);
        const result = await patient.deleteOne({patientID: ID});
        res.json(result);
    });

    app.patch('/patients/update/:patientID', async(req, res)=>{
        const ID = parseInt(req.params.patientID);
        const result = await patient.findOneAndUpdate({patientID: ID}, req.body, {new: true});
        res.json(result);
    });

    app.listen(9000, ()=>{
        console.log("Server for patients Initialised...");
    });
});