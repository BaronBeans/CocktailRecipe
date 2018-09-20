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
require("./stylesheets/components/_all.css");
var Header_1 = require("./components/Header");
var Cocktails_1 = require("./components/Cocktails");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "App" },
            React.createElement("header", null,
                React.createElement(Header_1["default"], null)),
            React.createElement("div", { id: "#cocktails" },
                React.createElement(Cocktails_1["default"], null)),
            React.createElement("footer", { className: "footer text-center fixed-bottom" },
                React.createElement("p", null,
                    "Application created by ",
                    React.createElement("a", { href: "https://github.com/BaronBeans", target: "_blank" }, "Sean Barnard"),
                    " as a training exercise for ",
                    React.createElement("a", { href: "https://neworbit.co.uk/", target: "_blank" }, "New Orbit Ltd.")))));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
//# sourceMappingURL=App.js.map