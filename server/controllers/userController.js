const express = require('express');
const Wallet = require('../model/walletModel');
const userModel = require('../model/userModel');
const schemeModel = require('../model/schemeModel');
const loanModel = require('../model/loanModel');

const createUser = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const data = req.body;
    if (!data.name || !data.email || !data.password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await new userModel(data);


    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    user.accountNumber = accountNumber;
    const wallet = await Wallet.create({ userId: user._id, balance: 0, accountNumber });
    user.walletId = wallet._id;

    await user.save()
        .then(() => {
            res.status(201).json({ message: 'User created successfully', user, wallet });
        })
        .catch((error) => {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Internal server error' });
        });

}
const loginUser = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    userModel.findOne({ email, password })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            res.status(200).json({ message: 'Login successful', user });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error logging in', error });
        });
}

const getUser = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.params;

    userModel.findById(id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User found', user });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error fetching user', error });
        });
}
const updateUser = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.params;
    const data = req.body;

    userModel.findByIdAndUpdate(id, data, { new: true })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User updated successfully', user });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating user', error });
        });
}
const deleteUser = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.params;

    userModel.findByIdAndDelete(id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error deleting user', error });
        });
}
const getSchemeId = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.query;


    userModel.findById(id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User found', email: user.email, schemeId: user.schemeId });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error fetching user', error });
        });
}
const getSchemes = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const { id } = req.query;

        // 1. Find the user
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // 2. Check if schemeIds exist
        const schemeId = user.schemeId; // Assuming this is an array like ['id1', 'id2', 'id3']
        if (!schemeId || schemeId.length === 0) {
            return res.status(404).json({ message: 'No schemes assigned to user', });
        }

        // 3. Fetch all schemes that match these IDs
        const schemes = await schemeModel.find({ _id: { $in: schemeId } });

        // 4. Return the schemes
        return res.status(200).json({ message: 'Schemes found', schemes });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

const getLoanId = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.query;


    userModel.findById(id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User found', email: user.email, loanId: user.loanId });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error fetching user', error });
        });
}

const getLoans = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const { id } = req.query
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const loanId = user.loanId;
        if (!loanId || loanId.length === 0) {
            return res.status(404).json({ message: 'No loan assigned to user', });
        }

        // 3. Fetch all schemes that match these IDs
        const loans = await loanModel.find({ _id: { $in: loanId } });

        // 4. Return the schemes
        return res.status(200).json({ message: 'Loan found', loans });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
}




module.exports = { createUser, loginUser, getUser, updateUser, deleteUser, getSchemes, getSchemeId, getLoanId, getLoans };

