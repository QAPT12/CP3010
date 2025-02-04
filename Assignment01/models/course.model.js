const mongoose = require('mongoose');

const SessionSubSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: true,
        default: 1
    },
    startTime: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    room: {
        type: String,
        required: true
    }
});

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, "Please enter the course name"],
    },
    courseTitle: {
        type: String,
        required: [true, "Please enter the course title"],
    },
    sessions: {
        type: [SessionSubSchema], // Array of session objects
    }
}, 
{
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
