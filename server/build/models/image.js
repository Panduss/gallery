"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var fireorm_1 = require("fireorm");
var class_validator_1 = require("class-validator");
var Image = /** @class */ (function () {
    function Image() {
    }
    __decorate([
        class_validator_1.IsString()
    ], Image.prototype, "id");
    __decorate([
        class_validator_1.IsString()
    ], Image.prototype, "url");
    Image = __decorate([
        fireorm_1.Collection("images")
    ], Image);
    return Image;
}());
exports["default"] = Image;
//# sourceMappingURL=image.js.map