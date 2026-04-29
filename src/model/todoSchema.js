import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }
},{timespans:true});

export default mongoose.model("todoList", todoSchema);