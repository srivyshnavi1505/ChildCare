const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Accountschema=new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);

module.exports=mongoose.model('Account', Accountschema);