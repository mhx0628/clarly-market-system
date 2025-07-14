const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// 获取所有工单
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM WorkOrders');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;