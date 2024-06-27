//import mongoose
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://fathimaps2022:fathima@cluster0.nw5ugwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected successfully")
})
.catch((error)=>
{
    console.log("error")
})