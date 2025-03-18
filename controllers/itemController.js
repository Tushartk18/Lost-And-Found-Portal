const LostItem = require('../models/LostItem');

const addLostItem = async (req, res) => {
    try {
        const item = new LostItem(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Error adding item' });
    }
};

const getLostItems = async (req, res) => {
    const items = await LostItem.find();
    res.json(items);
};

module.exports = { addLostItem, getLostItems };
