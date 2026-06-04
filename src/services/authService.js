// Simulated Backend Auth Service
// In a real app, this would be making fetch/axios calls to a real backend.

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to interact with local storage
const getUsers = () => JSON.parse(localStorage.getItem('aura_users') || '[]');
const saveUsers = (users) => localStorage.setItem('aura_users', JSON.stringify(users));

export const authService = {
  async register(email, password, fullName) {
    await delay(1200); // Simulate network latency

    const users = getUsers();
    if (users.find(u => u.email === email)) {
      throw new Error('Email is already registered.');
    }

    // In a real app, you would hash the password. We mock it here.
    const newUser = {
      id: Date.now().toString(),
      email,
      fullName,
      passwordHash: btoa(password), // simple base64 "hash" for simulation
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    const mockToken = btoa(JSON.stringify({ id: newUser.id, email }));
    
    return {
      user: { id: newUser.id, email: newUser.email, fullName: newUser.fullName },
      token: mockToken
    };
  },

  async login(email, password) {
    await delay(1000); // Simulate network latency

    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      throw new Error('Invalid email or password.');
    }

    if (user.passwordHash !== btoa(password)) {
      throw new Error('Invalid email or password.');
    }

    const mockToken = btoa(JSON.stringify({ id: user.id, email }));

    return {
      user: { id: user.id, email: user.email, fullName: user.fullName },
      token: mockToken
    };
  },

  async socialLogin(provider) {
    await delay(1000); // Simulate network redirect/latency
    const email = `user@${provider.toLowerCase()}.com`;
    const fullName = `${provider} User`;
    
    const users = getUsers();
    let user = users.find(u => u.email === email);
    
    // Auto register if user doesn't exist
    if (!user) {
      user = {
        id: Date.now().toString(),
        email,
        fullName,
        passwordHash: btoa(provider + 'mockpassword'),
        createdAt: new Date().toISOString(),
        savedProperties: [],
        appointments: []
      };
      users.push(user);
      saveUsers(users);
    }
    
    const mockToken = btoa(JSON.stringify({ id: user.id, email }));

    return {
      user: { 
        id: user.id, email: user.email, fullName: user.fullName, 
        savedProperties: user.savedProperties || [], 
        appointments: user.appointments || []
      },
      token: mockToken
    };
  },

  async updateProfile(userId, updates) {
    await delay(800);
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      throw new Error('User not found.');
    }

    if (updates.email && updates.email !== users[userIndex].email) {
      if (users.find(u => u.email === updates.email)) {
        throw new Error('Email is already in use by another account.');
      }
    }

    const updatedUser = { ...users[userIndex], ...updates };
    users[userIndex] = updatedUser;
    saveUsers(users);

    return {
      user: { 
        id: updatedUser.id, 
        email: updatedUser.email, 
        fullName: updatedUser.fullName,
        phone: updatedUser.phone,
        address: updatedUser.address,
        createdAt: updatedUser.createdAt,
        savedProperties: updatedUser.savedProperties || [],
        appointments: updatedUser.appointments || []
      }
    };
  },

  async changePassword(userId, currentPassword, newPassword) {
    await delay(800);
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) throw new Error('User not found.');
    if (users[userIndex].passwordHash !== btoa(currentPassword)) throw new Error('Incorrect current password.');

    users[userIndex].passwordHash = btoa(newPassword);
    saveUsers(users);
    
    return true;
  },

  async toggleSavedProperty(userId, propertyId) {
    await delay(500);
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) throw new Error('User not found.');

    const user = users[userIndex];
    if (!user.savedProperties) user.savedProperties = [];

    const isSaved = user.savedProperties.includes(propertyId);
    if (isSaved) {
      user.savedProperties = user.savedProperties.filter(id => id !== propertyId);
    } else {
      user.savedProperties.push(propertyId);
    }

    users[userIndex] = user;
    saveUsers(users);

    return user.savedProperties;
  },

  async bookAppointment(userId, appointmentData) {
    await delay(800);
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) throw new Error('User not found.');

    const user = users[userIndex];
    if (!user.appointments) user.appointments = [];

    const newAppointment = {
      id: Date.now().toString(),
      ...appointmentData,
      status: 'Scheduled',
      createdAt: new Date().toISOString()
    };

    user.appointments.push(newAppointment);
    users[userIndex] = user;
    saveUsers(users);

    return user.appointments;
  }
};
