"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
// import '../stylesheets/components/_ingredients.css';
var ingredients_1 = require("../data/ingredients");
var Ingredients = /** @class */ (function (_super) {
    __extends(Ingredients, _super);
    function Ingredients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ingredients.prototype.render = function () {
        return (React.createElement("div", { className: "row tablecenter" },
            React.createElement("div", { className: "col-1" }),
            React.createElement("div", { className: "col-10" },
                React.createElement("hr", null),
                React.createElement("h1", null, "Ingredients List"),
                React.createElement("hr", null),
                React.createElement("ul", null, ingredients_1["default"].map(function (ingredient) {
                    return (React.createElement("div", { key: ingredient.name },
                        React.createElement("strong", null, ingredient.name)));
                }))),
            React.createElement("div", { className: "col-1" })));
    };
    return Ingredients;
}(react_1.Component));
exports["default"] = Ingredients;
//# sourceMappingURL=Ingredients.js.map