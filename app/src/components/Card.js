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
require("../stylesheets/components/_card.css");
var Rating_1 = require("./Rating");
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("a", { className: "col-md-3", href: '/' + this.props.cocktail.url },
            React.createElement("div", { className: "card" },
                React.createElement("img", { src: this.props.cocktail.image, alt: this.props.cocktail.name }),
                React.createElement("div", { className: "container" },
                    React.createElement("h4", { className: "featureLeft" }, this.props.cocktail.name),
                    React.createElement("p", { className: "overflowController" }, this.props.cocktail.description),
                    React.createElement("div", { className: "floatLeft" },
                        React.createElement(Rating_1["default"], { rating: this.props.cocktail.rating })),
                    React.createElement("div", { className: "floatRight featureRight" },
                        React.createElement("p", null, '£' + this.props.cocktail.price.toFixed(2)))))));
    };
    return Card;
}(react_1.Component));
exports["default"] = Card;
//# sourceMappingURL=Card.js.map