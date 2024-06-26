import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  attachment: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  
 
});

const Task = mongoose.model("Task", taskSchema);

export default Task;


/*status: {
  type: String,
  enum: ["Pending", "Completed", "Rejected"],
  required: true,
},*/