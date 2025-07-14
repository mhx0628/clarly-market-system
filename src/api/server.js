require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('澄迈市场管理系统后端服务');
});

const merchantsRouter = require('./routes/merchants');
app.use('/api/merchants', merchantsRouter);

const feesRouter = require('./routes/fees');
app.use('/api/fees', feesRouter);

const workOrdersRouter = require('./routes/work_orders');
app.use('/api/work_orders', workOrdersRouter);

const adminsRouter = require('./routes/admins');
app.use('/api/admins', adminsRouter);

const stallsRouter = require('./routes/stalls');
app.use('/api/stalls', stallsRouter);

const reportsRouter = require('./routes/reports');
app.use('/api/reports', reportsRouter);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

// 在这里添加其他路由

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});