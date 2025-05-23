const express = require(express);
const userModel = require('../model/userModel');
const schemeModel = require('../model/schemeModel');



const createScheme = async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const data = req.body;
    const scheme = await new schemeModel(data);
    await scheme.save();
    const user = await userModel.findById(data.userId);
    user.schemeId = scheme._id;
    await user.save();
    res.status(200).json({ message: 'Scheme created successfully', scheme, user });
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