import { userAPI } from '../services/api';

// Check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// Get current user ID for namespacing localStorage
const getUserStorageKey = (baseKey) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Extract user ID from token (it's base64 encoded)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return `${baseKey}_user_${payload.userId}`;
    } catch (e) {
      return baseKey;
    }
  }
  return `${baseKey}_guest`;
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
      // Also save to localStorage as cache
      const storageKey = getUserStorageKey('canadianNewcomer_userProfile');
      localStorage.setItem(storageKey, JSON.stringify(profile));
      return response;
    } catch (error) {
      console.error('Error saving profile to backend:', error);
      // Fallback to localStorage if backend fails
      const storageKey = getUserStorageKey('canadianNewcomer_userProfile');
      localStorage.setItem(storageKey, JSON.stringify(profile));
    }
  } else {
    // Guest user - save to localStorage
    const storageKey = getUserStorageKey('canadianNewcomer_userProfile');
    localStorage.setItem(storageKey, JSON.stringify(profile));
  }
};

export const getUserProfile = async () => {
  if (isAuthenticated()) {
    try {
      // Get from backend
      const response = await userAPI.getProfile();
      // Cache in localStorage
      const storageKey = getUserStorageKey('canadianNewcomer_userProfile');
      localStorage.setItem(storageKey, JSON.stringify(response.profile));
      return response.profile;
    } catch (error) {
      console.error('Error getting profile from backend:', error);
      // Fallback to localStorage cache
      const storageKey = getUserStorageKey('canadianNewcomer_userProfile');
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : null;
    }
  } else {
    // Guest user - get from localStorage
    const storageKey = getUserStorageKey('canadianNewcomer_userProfile');
    const saved = localStorage.getItem(storageKey);
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
      // Also cache in localStorage
      const storageKey = getUserStorageKey('canadianNewcomer_taskProgress');
      localStorage.setItem(storageKey, JSON.stringify(tasks));
      return response;
    } catch (error) {
      console.error('Error saving tasks to backend:', error);
      // Fallback to localStorage
      const storageKey = getUserStorageKey('canadianNewcomer_taskProgress');
      localStorage.setItem(storageKey, JSON.stringify(tasks));
    }
  } else {
    // Guest user - save to localStorage
    const storageKey = getUserStorageKey('canadianNewcomer_taskProgress');
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }
};

export const getTaskProgress = async () => {
  if (isAuthenticated()) {
    try {
      // Get from backend
      const response = await userAPI.getTasks();
      // Cache in localStorage
      const storageKey = getUserStorageKey('canadianNewcomer_taskProgress');
      localStorage.setItem(storageKey, JSON.stringify(response.tasks));
      return response.tasks;
    } catch (error) {
      console.error('Error getting tasks from backend:', error);
      // Fallback to localStorage cache
      const storageKey = getUserStorageKey('canadianNewcomer_taskProgress');
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : null;
    }
  } else {
    // Guest user - get from localStorage
    const storageKey = getUserStorageKey('canadianNewcomer_taskProgress');
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : null;
  }
};

// ==================== ONBOARDING ====================

export const setOnboardingComplete = (value) => {
  const storageKey = getUserStorageKey('canadianNewcomer_onboardingComplete');
  localStorage.setItem(storageKey, JSON.stringify(value));
};

export const isOnboardingComplete = () => {
  const storageKey = getUserStorageKey('canadianNewcomer_onboardingComplete');
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : false;
};

// ==================== CLEAR DATA ====================

export const clearAllData = () => {
  // Clear all possible storage keys
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('canadianNewcomer_')) {
      localStorage.removeItem(key);
    }
  });
  localStorage.removeItem('token'); // Also clear auth token
};