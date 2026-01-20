// LocalStorage utility functions

const STORAGE_KEYS = {
    USER_PROFILE: 'canadianNewcomer_userProfile',
    TASK_PROGRESS: 'canadianNewcomer_taskProgress',
    ONBOARDING_COMPLETE: 'canadianNewcomer_onboardingComplete'
  };
  
  // User Profile Functions
  export const saveUserProfile = (profile) => {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
      return true;
    } catch (error) {
      console.error('Error saving user profile:', error);
      return false;
    }
  };
  
  export const getUserProfile = () => {
    try {
      const profile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return profile ? JSON.parse(profile) : null;
    } catch (error) {
      console.error('Error loading user profile:', error);
      return null;
    }
  };
  
  // Task Progress Functions
  export const saveTaskProgress = (tasks) => {
    try {
      // Only save the completion state, not all task data
      const progressData = tasks.map(task => ({
        id: task.id,
        completed: task.completed
      }));
      localStorage.setItem(STORAGE_KEYS.TASK_PROGRESS, JSON.stringify(progressData));
      return true;
    } catch (error) {
      console.error('Error saving task progress:', error);
      return false;
    }
  };
  
  export const getTaskProgress = () => {
    try {
      const progress = localStorage.getItem(STORAGE_KEYS.TASK_PROGRESS);
      return progress ? JSON.parse(progress) : null;
    } catch (error) {
      console.error('Error loading task progress:', error);
      return null;
    }
  };
  
  // Onboarding Status Functions
  export const setOnboardingComplete = (isComplete) => {
    try {
      localStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETE, JSON.stringify(isComplete));
      return true;
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      return false;
    }
  };
  
  export const isOnboardingComplete = () => {
    try {
      const status = localStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETE);
      return status ? JSON.parse(status) : false;
    } catch (error) {
      console.error('Error loading onboarding status:', error);
      return false;
    }
  };
  
  // Clear all data (for reset functionality)
  export const clearAllData = () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
      return true;
    } catch (error) {
      console.error('Error clearing data:', error);
      return false;
    }
  };