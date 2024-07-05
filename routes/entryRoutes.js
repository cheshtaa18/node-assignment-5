const express = require('express');
const Entry = require('../models/entry');
const router = express.Router();

// Create a new entry
router.post('/', async (req, res) => {
    try {
        const entry = new Entry(req.body);
        await entry.save();
        res.status(201).send(entry);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all entries
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.find();
        res.status(200).send(entries);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a specific entry by ID
router.get('/:id', async (req, res) => {
    try {
        const entry = await Entry.findById(req.params.id);
        if (!entry) {
            return res.status(404).send();
        }
        res.status(200).send(entry);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a specific entry by ID
router.patch('/:id', async (req, res) => {
    try {
        const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!entry) {
            return res.status(404).send();
        }
        res.status(200).send(entry);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a specific entry by ID
router.delete('/:id', async (req, res) => {
    try {
        const entry = await Entry.findByIdAndDelete(req.params.id);
        if (!entry) {
            return res.status(404).send();
        }
        res.status(200).send(entry);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
