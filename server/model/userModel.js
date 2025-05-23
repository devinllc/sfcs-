const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ['user', 'agent', 'admin'],
        default: 'user',
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    accountNumber: {
        type: Number,
        unique: true,
        default: 0,
    },
    walletId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' },
    schemeId: [
        {
            type: String,
        }
    ],
    loanId: [{
        type: String,
    }],
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
