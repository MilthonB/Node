"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexionDB = new sequelize_1.Sequelize('node', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = conexionDB;
//# sourceMappingURL=config.js.map