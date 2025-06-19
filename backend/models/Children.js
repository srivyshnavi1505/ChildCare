const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Childrenschema=new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        guardian: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        education: {
            type: String,
            required: true
        },
        health: {
            type: String,
            required: true
        },
        hobbies: {
            type: String,
            required: true
        }
    }, {timestamps:true}
);

module.exports=mongoose.model('Children', Childrenschema);