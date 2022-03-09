import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    isChecked: {
        type: Boolean
    }
})

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;