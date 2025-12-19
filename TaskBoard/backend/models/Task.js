import mongoose from "mongoose";


const taskSchema = new mongoose.Schema(
{
title: {
type: String,
required: true,
trim: true
},
status: {
type: String,
enum: ["Todo", "In Progress", "Done"],
default: "Todo"
}
},
{ timestamps: true }
);


export default mongoose.model("Task", taskSchema);