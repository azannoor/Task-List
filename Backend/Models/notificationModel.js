import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  
});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
