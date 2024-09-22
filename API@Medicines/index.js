const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const medicine = require('./Medicine');

const connectionString = 'mongodb+srv://23010101605:mohit123@cluster0.pbnz1h4.mongodb.net/FullStackProject?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString).then(()=>{

    const app = express();

    // app.use(bodyParser.json());

    app.use(cors());

    app.use(bodyParser.urlencoded({extended: false}));
    console.log("Connection to medicine's DB Established...");

    app.use(bodyParser.urlencoded({extended: false}));

    app.get('/medicines', async(req, res)=>{
        const result = await medicine.find();
        res.json(result);
    });

    app.get('/medicines/:medicineID', async(req, res)=>{
        const ID = parseInt(req.params.medicineID, 10);
        const result = await medicine.findOne({medicineID: ID})
        res.json(result);
    });

    app.post('/medicines/add', async(req, res)=>{
        const data = new medicine(req.body);
        const result = await result.save();
        res.json(result);
    });

    app.delete('/medicines/:medicineID', async(req, res)=>{
        const ID = parseInt(req.params.medicineID);
        const result = await medicine.deleteOne({medicineID: ID});
        res.json(result);
    });

    app.patch('/medicines/update/:medicineID', async(req, res)=>{
        const ID = parseInt(req.params.medicineID);
        const result = await medicine.findOneAndUpdate({medicineID: ID}, req.body, {new: true});
        res.json(result);
    });

    app.listen(8000, ()=>{
        console.log("Server for medicines Initialised...");
    });
});