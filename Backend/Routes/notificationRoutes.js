import express from "express";
import { Router } from "express";
import * as notificationController from "../Controllers/notificationController.js";

const router = Router();

// Get all notifications
router.get("/", notificationController.getAllNotifications);

// Get a single notification by ID
router.get("/:id", notificationController.getNotificationById);

// Create a new notification
router.post("/", notificationController.createNotification);

// Update a notification by ID
router.put("/:id", notificationController.updateNotification);

// Delete a notification by ID
router.delete("/:id", notificationController.deleteNotification);

export default router;
