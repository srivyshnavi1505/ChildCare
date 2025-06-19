const express=require('express');
const mongoose=require('mongoose');
const Children=require('./models/Children');
// const path=require('path');

const app=express();

const dbURI='mongodb+srv://Satvik:Rama2005@cluster0.azwrtim.mongodb.net/Sriram?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> {
        console.log("Connected to db");
        app.listen(3000);
        console.log("Listening to requests");
    })
    .catch((err)=> console.log(err));

    app.use(express.urlencoded({ extended: true }));

app.post('/children', (req,res)=> {
    const child=new Children({
        name: "abcd"
    })
});