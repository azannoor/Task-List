import Task from "../Models/taskModel.js";


export const getAllTasks = async (req, res) => {
  try {
    let tasks;
    // Check if the user is admin
    if (req.user.role === 'admin') {
      // If user is admin, fetch all tasks
      tasks = await Task.find();
    } else {
      // If user is not admin, fetch tasks associated with the authenticated user
      tasks = await Task.find({ user: req.user._id });
    }
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createTask = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  if (!title || !description || !startDate || !endDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const task = new Task({
      title,
      description,
      startDate,
      endDate,
      user: req.user._id // Associate the task with the authenticated user
    });
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error("Error creating task:", err.message); // Log detailed error message
    res.status(400).json({ message: err.message });
  }
};


// Update a task by ID
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.title = req.body.title || task.title;
      task.description = req.body.description || task.description;
      // Update other task properties here

      const updatedTask = await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    
    // Check if the task exists
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    // Delete the task
    await Task.findByIdAndDelete(taskId);
    
    // Respond with success message
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other controller methods...

