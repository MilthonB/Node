"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1["default"]();
        this.port = process.env.PORT || 4500;
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Servidor corriendo en el puerto: ' + _this.port);
        });
    };
    return Server;
}());
exports["default"] = Server;
