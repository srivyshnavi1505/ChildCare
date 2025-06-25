const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Children = require('./models/Children');
const Account = require('./models/Account');
const Celebration = require('./models/Celebration');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// MongoDB connection (only one DB: Sriram)
const dbURI = 'mongodb+srv://Satvik:Rama2005@cluster0.azwrtim.mongodb.net/Sriram?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to db");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(err => console.error("DB connection error:", err));


app.get('/', (req, res) => {
    console.log(req.ip, req.url);
    Children.find()
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err));
});


app.get('/newchild', (req, res) => {
    console.log(req.ip, req.url);
    const child = new Children({
        name: "Abcd",
        age: 15,
        gender: "Male",
        photo: "url",
        location: "Hyderabad",
        guardian: "friend's father",
        status: "Orphan",
        education: "10th class",
        health: "Fit",
        hobbies: "crying"
    });

    child.save()
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
});


app.get('/accounts', (req, res) => {
    console.log(req.ip, req.url);
    Account.find()
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err));
});


app.post('/accounts', (req, res) => {
    console.log(req.ip, req.url);
    const account = new Account(req.body);

    account.save()
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
});

app.get('/celebrations', (req,res) => {
    console.log(req.ip, req.url);
    Celebration.find()
        .then(result => res.json(result))
        .catch(err => res.send(err));
});

app.post('/celebrations', (req,res) => {
    console.log(req.ip, req.url);
    const celebration = new Celebration(req.body);

    celebration.save()
        .then(result=> res.send(result))
        .catch(err => res.send(err));
})

app.get('/:id', (req, res) => {
    console.log(req.ip, req.url);
    Children.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err));
});