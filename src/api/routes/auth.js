const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../../config/db');

// 微信登录
router.post('/login', async (req, res) => {
  const { code } = req.body;
  const { APPID, SECRET } = process.env; // 从环境变量中获取AppID和Secret

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    const response = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`);
    const { openid, session_key } = response.data;

    if (!openid) {
      return res.status(500).json({ error: 'Failed to get openid' });
    }

    // 在这里处理用户数据的查询或创建逻辑

    res.json({ openid, session_key });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;