const express = require('express');
const userModel = require('../model/userModel');
const schemeModel = require('../model/schemeModel');



const mongoose = require('mongoose');



const createScheme = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { id } = req.query;
  const data = req.body;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid or missing user ID" });
  }

  const userId = new mongoose.Types.ObjectId(id);

  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const schemeData = {
    ...data,
    interestRate: Number(data.interestRate),
    tenure: Number(data.tenure),
    minAmount: Number(data.minAmount),
    maxAmount: Number(data.maxAmount),
    createdBy: userId,
  };

  const scheme = new schemeModel(schemeData);
  await scheme.save();

  user.schemeId.push(scheme._id.toString());
  await user.save();

  return res.status(200).json({ message: 'Scheme created and linked successfully', scheme, user });
};


const updateScheme = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.query;
    const data = req.body;

    schemeModel.findByIdAndUpdate(id, data, { new: true })
        .then((scheme) => {
            if (!scheme) {
                return res.status(404).json({ message: 'Scheme not found' });
            }
            res.status(200).json({ message: 'Scheme updated successfully', scheme });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating scheme', error });
        });
};
const approveScheme = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { id } = req.query;
    const data = req.body;

    schemeModel.findByIdAndUpdate(id, data, { new: true })
        .then((scheme) => {
            if (!scheme) {
                return res.status(404).json({ message: 'Scheme not found' });
            }
            res.status(200).json({ message: 'Scheme approved successfully', scheme });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error approving scheme', error });
        });
}


module.exports = { createScheme, updateScheme, approveScheme };