import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    name : {
        type:String,
        required:[true,'Enter your Task.'],
        trim:true,
        maxlength:[40,'Task Name cannot be more than 20 characters.']

    },
    completed : {
        type: Boolean,
        default:false,
    },
})
const Task = mongoose.model('Task',taskSchema);

export default Task;