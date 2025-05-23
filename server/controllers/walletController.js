const express = require('express');
const userModel = require('../model/userModel');
const walletModel = require('../model/walletModel');
const loanModel = require('../model/loanModel');
const schemeModel = require('../model/schemeModel');


const getBalance = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { userId } = req.query;  // ✅ Works in GET requests

    walletModel.findOne({ userId })
        .then((wallet) => {
            if (!wallet) {
                return res.status(404).json({ message: 'Wallet not found' });
            }
            res.status(200).json({ balance: wallet.balance, wallet });
        })
        .catch((error) => {
            console.error('Error fetching wallet balance:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}

const addMoney = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { userId, amount } = req.body;

    if (!userId || !amount) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    walletModel.findOneAndUpdate({ userId }, { $inc: { balance: amount } }, { new: true })
        .then((wallet) => {
            if (!wallet) {
                return res.status(404).json({ message: 'Wallet not found' });
            }
            res.status(200).json({ message: 'Money added successfully', wallet });
        })
        .catch((error) => {
            console.error('Error adding money to wallet:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}
const withdrawMoney = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { userId, amount } = req.body;

    if (!userId || !amount) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    walletModel.findOneAndUpdate({ userId }, { $inc: { balance: -amount } }, { new: true })
        .then((wallet) => {
            if (!wallet) {
                return res.status(404).json({ message: 'Wallet not found' });
            }
            res.status(200).json({ message: 'Money withdrawn successfully', wallet });
        })
        .catch((error) => {
            console.error('Error withdrawing money from wallet:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}

module.exports = { getBalance, addMoney, withdrawMoney };