const BASE_URL = 'https://sfc-api.ufdevs.me'; // Replace with your actual base URL
let currentUserId = localStorage.getItem('userId');
export const setCurrentUserId = (userId) => {
    currentUserId = userId;
    if (userId) {
        localStorage.setItem('userId', userId);
    } else {
        localStorage.removeItem('userId');
    }
};

export const getCurrentUserId = () => currentUserId;

export const logout = () => {
    setCurrentUserId(null);
};

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create user');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Login user
export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        
        // Check if the response contains user data
        if (data && data.user) {
            // Store the user ID from the response
            setCurrentUserId(data.user._id || data.user.id);
            return data;
        } else {
            throw new Error(data.message || 'Login failed');
        }
    } catch (error) {
        throw error;
    }
};