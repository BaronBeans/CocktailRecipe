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
require("../stylesheets/components/_header.css");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
            React.createElement("img", { src: "/images/Cocktail-Icon.png", alt: "Logo", className: "logoImage" }),
            React.createElement("a", { className: "navbar-brand", href: "#" }, "Cocktail Recipes"),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                React.createElement("ul", { className: "navbar-nav mr-auto" },
                    React.createElement("li", { className: "nav-item active" },
                        React.createElement("a", { className: "nav-link", href: "#cocktails" },
                            "Cocktails ",
                            React.createElement("span", { className: "sr-only" }, "(current)"))),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "#ingredients" }, "Ingredients")),
                    React.createElement("li", { className: "nav-item dropdown" },
                        React.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Search"),
                        React.createElement("div", { className: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
                            React.createElement("a", { className: "dropdown-item", href: "/cocktails" }, "Search for a Cocktail"),
                            React.createElement("a", { className: "dropdown-item", href: "/ingredients" }, "Search for an Ingredient"),
                            React.createElement("div", { className: "dropdown-divider" }),
                            React.createElement("a", { className: "dropdown-item", href: "/about" }, "About this app")))))));
    };
    return Header;
}(react_1.Component));
exports["default"] = Header;
//# sourceMappingURL=Header.js.map