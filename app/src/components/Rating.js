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
require("../stylesheets/components/_rating.css");
var Rating = /** @class */ (function (_super) {
    __extends(Rating, _super);
    function Rating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rating.prototype.calculateScore = function (rating) {
        return rating * 2;
    };
    Rating.prototype.renderScore = function (rating) {
        var score = this.calculateScore(rating);
        switch (score) {
            case 1:
                return "0.5 stars";
            case 2:
                return "1 star";
            case 3:
                return "1.5 stars";
            case 4:
                return "2 stars";
            case 5:
                return "2.5 stars";
            case 6:
                return "3 stars";
            case 7:
                return "3.5 stars";
            case 8:
                return "4 stars";
            case 9:
                return "4.5 stars";
            case 10:
                return "5 stars";
            default:
                return "Nothing";
        }
    };
    Rating.prototype.render = function () {
        return (React.createElement("div", { className: "ratingContainer" },
            React.createElement("p", null, this.renderScore(this.props.rating))));
    };
    return Rating;
}(react_1.Component));
exports["default"] = Rating;
//# sourceMappingURL=Rating.js.map