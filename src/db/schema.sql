-- 数据库表结构

-- 商户表
CREATE TABLE Merchants (
    stall_id VARCHAR(255) PRIMARY KEY,
    merchant_name VARCHAR(255) NOT NULL,
    license_number VARCHAR(255),
    business_category VARCHAR(255),
    id_number VARCHAR(255),
    phone_number VARCHAR(255), -- 需要SM4加密
    water_fee DECIMAL(10, 2),
    electricity_fee DECIMAL(10, 2),
    rent DECIMAL(10, 2)
);

-- 费用表
CREATE TABLE Fees (
    fee_id INT AUTO_INCREMENT PRIMARY KEY,
    stall_id VARCHAR(255),
    fee_type VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    due_date DATE,
    late_fee DECIMAL(10, 2) DEFAULT 0.00,
    status VARCHAR(50),
    paid_date DATE,
    FOREIGN KEY (stall_id) REFERENCES Merchants(stall_id)
);

-- 催缴提醒表
CREATE TABLE Reminders (
    reminder_id INT AUTO_INCREMENT PRIMARY KEY,
    fee_id INT,
    reminder_date DATE,
    method VARCHAR(50),
    status VARCHAR(50),
    FOREIGN KEY (fee_id) REFERENCES Fees(fee_id)
);

-- 工单表
CREATE TABLE WorkOrders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    stall_id VARCHAR(255),
    type VARCHAR(255) NOT NULL,
    description TEXT,
    images VARCHAR(1024), -- 存储图片URL，多个用逗号分隔
    priority VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP,
    FOREIGN KEY (stall_id) REFERENCES Merchants(stall_id)
);

-- 管理员表
CREATE TABLE Admins (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender VARCHAR(10),
    department VARCHAR(255),
    role VARCHAR(255),
    permissions TEXT,
    phone VARCHAR(255),
    address VARCHAR(255)
);

-- 摊位表
CREATE TABLE Stalls (
    stall_id VARCHAR(255) PRIMARY KEY,
    location VARCHAR(255),
    area DECIMAL(10, 2),
    facilities TEXT,
    rental_status VARCHAR(50)
);

-- 报表表
CREATE TABLE Reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data LONGTEXT,
    format VARCHAR(50)
);