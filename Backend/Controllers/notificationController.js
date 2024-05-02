import Notification from "../Models/notificationModel.js";

// Get all notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single notification by ID
export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (notification) {
      res.json(notification);
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new notification
export const createNotification = async (req, res) => {
  const notification = new Notification({
    message: req.body.message,
    // Add other notification properties here
  });

  try {
    const newNotification = await notification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a notification by ID
export const updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (notification) {
      notification.message = req.body.message || notification.message;
      // Update other notification properties here

      const updatedNotification = await notification.save();
      res.json(updatedNotification);
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a notification by ID
export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (notification) {
      await notification.remove();
      res.json({ message: "Notification deleted" });
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
