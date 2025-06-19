const express=require('express');
const mongoose=require('mongoose');
const Children=require('./models/Children');
const cors = require('cors');
// const path=require('path');

const app=express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

const dbURI='mongodb+srv://Satvik:Rama2005@cluster0.azwrtim.mongodb.net/Sriram?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
    .then(()=> {
        console.log("Connected to db");
        app.listen(3000);
        console.log("Listening to requests");
    })
    .catch((err)=> console.log(err));

app.get('/', (req,res)=> {
    console.log(req.ip);
    Children.find()
        .then((result)=> {
            res.json(result);
        })
        .catch(err=> console.log(err));
});

app.get('/newchild', (req,res)=> {
    const child=new Children({
        name: "Abcd",
        age: 15,
        gender: "Male",
        photo: "url",
        location: "hyderabad",
        guardian: "friend's father",
        status: "Orphan",
        education: "10th class",
        health: "Fit",
        hobbies: "crying"
    })
    child.save()
        .then((result)=> {
            res.send(result);
        })
        .catch(err=> console.log(err));
});