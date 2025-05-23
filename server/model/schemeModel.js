const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
    schemeName: {
        type: String,
        required: true,
    },
    schemeType: {
        type: String,
        enum: ['fixed', 'recurring'],
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
    minAmount: {
        type: Number,
        required: true,
    },
    maxAmount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    approved: {
        type: Boolean,
        default: false, // only true when admin verifies it
    },

    // Creator of the scheme
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' || 'Admin',
        required: true,
    },
    enabledJoining: {
        type: Boolean,
        default: true,
    },
    progess: {
        type: Number,
        default: 0,
    },
    ststus: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    // Members added to the scheme after approval
    members: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            joinedAt: {
                type: Date,
                default: Date.now,
            },
            investedAmount: {
                type: Number,
                default: 0,
            },
        }
    ],
});

const schemeModel = mongoose.model('Scheme', schemeSchema);
module.exports = schemeModel;
