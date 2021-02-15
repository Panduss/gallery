"use strict";
exports.__esModule = true;
var pages_1 = require("./providers/pages");
var auth_1 = require("./providers/auth");
exports.PagesApi = {
    getAllPages: pages_1.getAllPages,
    addPage: pages_1.addPage,
    editPage: pages_1.editPage,
    deletePage: pages_1.deletePage
};
exports.AuthApi = {
    login: auth_1.login
};
//# sourceMappingURL=index.js.map