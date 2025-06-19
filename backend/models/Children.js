const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Childrenschema=new Schema(
    {
        name: {

        },
        age: {

        },
        gender: {

        },
        photo: {

        },
        location: {

        },
        guardian: {

        },
        status: {

        },
        education: {

        },
        health: {

        },
        joindate: {

        },
        hobbies: {

        }
    }, {timestamps:true}
);

module.exports=mongoose.model('Children', Childrenschema);