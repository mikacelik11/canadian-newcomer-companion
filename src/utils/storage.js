import { userAPI } from '../services/api';

// Check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// ==================== USER PROFILE ====================

export const saveUserProfile = async (profile) => {
  if (isAuthenticated()) {
    try {
      // Save to backend
      const response = await userAPI.saveProfile({
        language: profile.language,
        purpose: profile.purpose,
        province: profile.province,
        location: profile.location,
        onboardingComplete: true
      });
      return response;
    } catch (error) {
      console.error('Error saving profile to backend:', error);
      // Fallback to localStorage if backend fails
      localStorage.setItem('canadianNewcomer_userProfile', JSON.stringify(profile));
    }
  } else {
    // Guest user - save to localStorage
    localStorage.setItem('canadianNewcomer_userProfile', JSON.stringify(profile));
  }
};

export const getUserProfile = async () => {
  if (isAuthenticated()) {
    try {
      // Get from backend
      const response = await userAPI.getProfile();
      return response.profile;
    } catch (error) {
      console.error('Error getting profile from backend:', error);
      // Fallback to localStorage
      const saved = localStorage.getItem('canadianNewcomer_userProfile');
      return saved ? JSON.parse(saved) : null;
    }
  } else {
    // Guest user - get from localStorage
    const saved = localStorage.getItem('canadianNewcomer_userProfile');
    return saved ? JSON.parse(saved) : null;
  }
};

// ==================== TASK PROGRESS ====================

export const saveTaskProgress = async (tasks) => {
  if (isAuthenticated()) {
    try {
      // Format tasks for backend
      const formattedTasks = tasks.map(task => ({
        taskId: task.id,
        completed: task.completed
      }));
      
      // Save to backend
      const response = await userAPI.saveTasks(formattedTasks);
      return response;
    } catch (error) {
      console.error('Error saving tasks to backend:', error);
      // Fallback to localStorage
      localStorage.setItem('canadianNewcomer_taskProgress', JSON.stringify(tasks));
    }
  } else {
    // Guest user - save to localStorage
    localStorage.setItem('canadianNewcomer_taskProgress', JSON.stringify(tasks));
  }
};

export const getTaskProgress = async () => {
  if (isAuthenticated()) {
    try {
      // Get from backend
      const response = await userAPI.getTasks();
      return response.tasks;
    } catch (error) {
      console.error('Error getting tasks from backend:', error);
      // Fallback to localStorage
      const saved = localStorage.getItem('canadianNewcomer_taskProgress');
      return saved ? JSON.parse(saved) : null;
    }
  } else {
    // Guest user - get from localStorage
    const saved = localStorage.getItem('canadianNewcomer_taskProgress');
    return saved ? JSON.parse(saved) : null;
  }
};

// ==================== ONBOARDING ====================

export const setOnboardingComplete = (value) => {
  localStorage.setItem('canadianNewcomer_onboardingComplete', JSON.stringify(value));
};

export const isOnboardingComplete = () => {
  const saved = localStorage.getItem('canadianNewcomer_onboardingComplete');
  return saved ? JSON.parse(saved) : false;
};

// ==================== CLEAR DATA ====================

export const clearAllData = () => {
  localStorage.removeItem('canadianNewcomer_userProfile');
  localStorage.removeItem('canadianNewcomer_taskProgress');
  localStorage.removeItem('canadianNewcomer_onboardingComplete');
  localStorage.removeItem('token'); // Also clear auth token
};