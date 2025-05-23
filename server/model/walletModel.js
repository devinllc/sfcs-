const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transaction',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    laonAmount: {
        type: Number,
        default: 0,
    },
    schemeAmount: {
        type: Number,
        default: 0,
    },
    loanId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Loan',
        },
    ],
    schemeId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Scheme',
        },
    ],
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true,
    },
}, { timestamps: true });
const walletModel = mongoose.model('Wallet', walletSchema);
module.exports = walletModel;