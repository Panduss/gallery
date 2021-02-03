"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Page = void 0;
var fireorm_1 = require("fireorm");
var class_validator_1 = require("class-validator");
var tabType_1 = require("./tabType");
var Page = /** @class */ (function () {
    function Page() {
    }
    __decorate([
        class_validator_1.IsString()
    ], Page.prototype, "id");
    __decorate([
        class_validator_1.IsEnum(tabType_1.TabType)
    ], Page.prototype, "type");
    __decorate([
        class_validator_1.IsString()
    ], Page.prototype, "title");
    __decorate([
        class_validator_1.IsString()
    ], Page.prototype, "subtitle");
    __decorate([
        class_validator_1.ValidateNested({ each: true })
    ], Page.prototype, "images");
    Page = __decorate([
        fireorm_1.Collection("pages")
    ], Page);
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map