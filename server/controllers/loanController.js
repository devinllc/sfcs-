const express = require('express');
const userModel = require('../model/userModel');
const schemeModel = require('../model/schemeModel');
const loanModel = require('../model/loanModel');

const applyLoan = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const data = req.body;
    const loan = await new loanModel(data);
    await loan.save();
    const user = await userModel.findById(data.userId);
    user.loanId = loan._id;
    await user.save();
    res.status(200).json({ message: 'Loan applied successfully', loan, user });
};
const updateLoan = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.query;
    const data = req.body;

    loanModel.findByIdAndUpdate(id, data, { new: true })
        .then((loan) => {
            if (!loan) {
                return res.status(404).json({ message: 'Loan not found' });
            }
            res.status(200).json({ message: 'Loan updated successfully', loan });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating loan', error });
        });
}
const approveLoan = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.query;
    const data = req.body;

    loanModel.findByIdAndUpdate(id, data, { new: true })
        .then((loan) => {
            if (!loan) {
                return res.status(404).json({ message: 'Loan not found' });
            }
            res.status(200).json({ message: 'Loan approved successfully', loan });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error approving loan', error });
        });
}
const loanStatus = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.query;
    const data = req.body;

    loanModel.findByIdAndUpdate(id, data, { new: true })
        .then((loan) => {
            if (!loan) {
                return res.status(404).json({ message: 'Loan not found' });
            }
            res.status(200).json({ message: 'Loan status updated successfully', loan });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating loan status', error });
        });
}


module.exports = { applyLoan, updateLoan, approveLoan, loanStatus };