const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CelebrationSchema=new Schema(
    {
        name: {
            type: String,
            required: true
        },
        occasion: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    }, { timestamps: true } 
);

module.exports=mongoose.model('Celebration', CelebrationSchema);