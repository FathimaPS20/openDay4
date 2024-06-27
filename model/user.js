const mongoose =require ('mongoose')
const schema=mongoose.Schema({
    Name:String,
    Age:Number,



})

const userModel = mongoose.model("user",schema);
module.exports = userModel;