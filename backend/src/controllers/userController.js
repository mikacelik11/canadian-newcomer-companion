const { prisma } = require('../config/db');

// @desc    Create or update user profile
// @route   POST /api/users/profile
// @access  Private
const createOrUpdateProfile = async (req, res) => {
  try {
    const { language, purpose, province, location, onboardingComplete } = req.body;
    const userId = req.user.id;

    // Validation - location is now optional
    if (!language || !purpose || !province) {
      return res.status(400).json({ 
        message: 'Please provide all required fields: language, purpose, province' 
      });
    }

    // Check if profile exists
    const existingProfile = await prisma.userProfile.findUnique({
      where: { userId }
    });

    let profile;

    if (existingProfile) {
      // Update existing profile
      profile = await prisma.userProfile.update({
        where: { userId },
        data: {
          language,
          purpose,
          province,
          location: location || province, // Default to province if no location provided
          onboardingComplete: onboardingComplete !== undefined ? onboardingComplete : existingProfile.onboardingComplete
        }
      });
    } else {
      // Create new profile
      profile = await prisma.userProfile.create({
        data: {
          userId,
          language,
          purpose,
          province,
          location: location || province, // Default to province if no location provided
          onboardingComplete: onboardingComplete || false
        }
      });
    }

    res.status(200).json({
      success: true,
      message: 'Profile saved successfully',
      profile
    });

  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Server error saving profile' });
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await prisma.userProfile.findUnique({
      where: { userId }
    });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({
      success: true,
      profile
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error getting profile' });
  }
};

// @desc    Save task progress
// @route   POST /api/users/tasks
// @access  Private
const saveTaskProgress = async (req, res) => {
  try {
    const { tasks } = req.body; // Array of { taskId, completed }
    const userId = req.user.id;

    if (!Array.isArray(tasks)) {
      return res.status(400).json({ message: 'Tasks must be an array' });
    }

    // Use transaction to update all tasks at once
    const updatedTasks = await prisma.$transaction(
      tasks.map(task => 
        prisma.taskProgress.upsert({
          where: {
            userId_taskId: {
              userId,
              taskId: task.taskId
            }
          },
          update: {
            completed: task.completed,
            completedAt: task.completed ? new Date() : null
          },
          create: {
            userId,
            taskId: task.taskId,
            completed: task.completed,
            completedAt: task.completed ? new Date() : null
          }
        })
      )
    );

    res.status(200).json({
      success: true,
      message: 'Task progress saved',
      tasks: updatedTasks
    });

  } catch (error) {
    console.error('Save task error:', error);
    res.status(500).json({ message: 'Server error saving tasks' });
  }
};

// @desc    Get task progress
// @route   GET /api/users/tasks
// @access  Private
const getTaskProgress = async (req, res) => {
  try {
    const userId = req.user.id;

    const tasks = await prisma.taskProgress.findMany({
      where: { userId },
      orderBy: { taskId: 'asc' }
    });

    res.status(200).json({
      success: true,
      tasks
    });

  } catch (error) {
    console.error('Get tasks error:', error);
    res.status(500).json({ message: 'Server error getting tasks' });
  }
};

module.exports = {
  createOrUpdateProfile,
  getProfile,
  saveTaskProgress,
  getTaskProgress
};