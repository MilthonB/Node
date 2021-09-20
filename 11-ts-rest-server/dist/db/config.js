"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexionDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sequelize = new sequelize_1.Sequelize('node', 'root', '123', {
            host: 'localhost',
            dialect: 'mysql'
        });
        yield sequelize.authenticate();
        console.log('Base de datos online');
    }
    catch (error) {
        throw new Error('Ocurrio un error en la conexion de la base de datos');
    }
});
exports.default = conexionDB;
//# sourceMappingURL=config.js.map