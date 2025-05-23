const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    interestRate: {
        type: Number,
        required: true,
    },
    tenure: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    nextPaymentDate: {
        type: Date,
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'unpaid'],
        default: 'unpaid',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const loanModel = mongoose.model('Loan', loanSchema);
module.exports = loanModel;