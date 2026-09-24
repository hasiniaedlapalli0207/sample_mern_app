
const { Timestamp } = require('mongodb');
let mongoose=require('mongoose');
let taskSchema = mongoose.Schema({
    taskdesc: {
        type: String,
        required: true
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    duedate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    }
}, {
    timestamps: true
});


let tasks=mongoose.model('tasks',taskSchema);
module.exports={tasks}
