const express = require('express');
const { addLostItem, getLostItems } = require('../controllers/itemController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/lost', protect, addLostItem);
router.get('/lost', protect, getLostItems);

module.exports = router;
