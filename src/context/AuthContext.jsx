import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('aura_current_user');
    const storedToken = localStorage.getItem('aura_token');
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user from local storage", e);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    setUser(data.user);
    localStorage.setItem('aura_current_user', JSON.stringify(data.user));
    localStorage.setItem('aura_token', data.token);
    return data.user;
  };

  const register = async (email, password, fullName) => {
    const data = await authService.register(email, password, fullName);
    setUser(data.user);
    localStorage.setItem('aura_current_user', JSON.stringify(data.user));
    localStorage.setItem('aura_token', data.token);
    return data.user;
  };

  const socialLogin = async (provider) => {
    const data = await authService.socialLogin(provider);
    setUser(data.user);
    localStorage.setItem('aura_current_user', JSON.stringify(data.user));
    localStorage.setItem('aura_token', data.token);
    return data.user;
  };

  const updateUser = async (updates) => {
    if (!user) throw new Error('Not logged in');
    const data = await authService.updateProfile(user.id, updates);
    setUser(data.user);
    localStorage.setItem('aura_current_user', JSON.stringify(data.user));
    return data.user;
  };

  const changePassword = async (currentPassword, newPassword) => {
    if (!user) throw new Error('Not logged in');
    return await authService.changePassword(user.id, currentPassword, newPassword);
  };

  const toggleSavedProperty = async (propertyId) => {
    if (!user) throw new Error('Not logged in');
    const savedProperties = await authService.toggleSavedProperty(user.id, propertyId);
    const updatedUser = { ...user, savedProperties };
    setUser(updatedUser);
    localStorage.setItem('aura_current_user', JSON.stringify(updatedUser));
    return savedProperties;
  };

  const bookAppointment = async (appointmentData) => {
    if (!user) throw new Error('Not logged in');
    const appointments = await authService.bookAppointment(user.id, appointmentData);
    const updatedUser = { ...user, appointments };
    setUser(updatedUser);
    localStorage.setItem('aura_current_user', JSON.stringify(updatedUser));
    return appointments;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aura_current_user');
    localStorage.removeItem('aura_token');
  };

  const value = {
    user,
    loading,
    login,
    register,
    socialLogin,
    updateUser,
    changePassword,
    toggleSavedProperty,
    bookAppointment,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
