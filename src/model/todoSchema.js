import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }
},{timespan:true});

export default mongoose.model("todoList", todoSchema);