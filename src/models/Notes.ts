import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    note: String,
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Notes = mongoose.model("Notes", notesSchema);
export default Notes;