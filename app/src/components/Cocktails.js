"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
require("../stylesheets/components/_all.css");
require("../stylesheets/components/_cocktails.css");
var cocktails_1 = require("../data/cocktails");
var Card_1 = require("./Card");
var Cocktails = /** @class */ (function (_super) {
    __extends(Cocktails, _super);
    function Cocktails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cocktails.prototype.render = function () {
        return (React.createElement("div", { className: "row bottomSpacing" }, cocktails_1["default"].map(function (cocktail) {
            return (React.createElement(Card_1["default"], { cocktail: cocktail }));
        })));
    };
    return Cocktails;
}(react_1.Component));
exports["default"] = Cocktails;
//# sourceMappingURL=Cocktails.js.map