"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var page_1 = require("../models/page");
var fireorm_1 = require("fireorm");
function getAllPages() {
    return __awaiter(this, void 0, void 0, function () {
        var pagesRepository;
        return __generator(this, function (_a) {
            pagesRepository = fireorm_1.getRepository(page_1.Page);
            return [2 /*return*/, pagesRepository.find()];
        });
    });
}
exports.getAllPages = getAllPages;
function addPage(type, title, subtitle, images) {
    return __awaiter(this, void 0, void 0, function () {
        var pagesRepository, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!type) {
                        throw new Error("Page type must be provided!");
                    }
                    if (!title) {
                        throw new Error("Page title must be provided!");
                    }
                    pagesRepository = fireorm_1.getRepository(page_1.Page);
                    page = new page_1.Page();
                    page.type = type;
                    page.title = title;
                    if (subtitle) {
                        page.subtitle = subtitle;
                    }
                    if (images) {
                        page.images = images;
                    }
                    return [4 /*yield*/, pagesRepository.create(page)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.addPage = addPage;
function editPage(id, type, title, subtitle, images) {
    return __awaiter(this, void 0, void 0, function () {
        var pagesRepository, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) {
                        throw new Error("Page id must be provided!");
                    }
                    pagesRepository = fireorm_1.getRepository(page_1.Page);
                    return [4 /*yield*/, pagesRepository.whereEqualTo('id', id).findOne()];
                case 1:
                    page = _a.sent();
                    if (!(page !== null)) return [3 /*break*/, 3];
                    page.type = type;
                    page.title = title;
                    if (subtitle) {
                        page.subtitle = subtitle;
                    }
                    if (images) {
                        page.images = images;
                    }
                    return [4 /*yield*/, pagesRepository.update(page)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: throw new Error("Page does not exist!");
            }
        });
    });
}
exports.editPage = editPage;
function deletePage(id) {
    return __awaiter(this, void 0, void 0, function () {
        var pagesRepository, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) {
                        throw new Error("Page id must be provided!");
                    }
                    pagesRepository = fireorm_1.getRepository(page_1.Page);
                    return [4 /*yield*/, pagesRepository.whereEqualTo('id', id).findOne()];
                case 1:
                    page = _a.sent();
                    if (!(page !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, pagesRepository["delete"](id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
                case 3: throw new Error("Page does not exist!");
            }
        });
    });
}
exports.deletePage = deletePage;
//# sourceMappingURL=pages.js.map