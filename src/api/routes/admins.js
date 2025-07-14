const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// 获取所有管理员
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Admins');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;