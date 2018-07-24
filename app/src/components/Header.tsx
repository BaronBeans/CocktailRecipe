import * as React from 'react';
import { Component } from 'react';
import '../stylesheets/components/_header.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src="/images/Cocktail-Icon.png" alt="Logo" className="logoImage" />
                <a className="navbar-brand" href="#">Cocktail Recipes</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Cocktails <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ingredients</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Search
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Search for a Cocktail</a>
                                <a className="dropdown-item" href="#">Search for an Ingredient</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/about">About this app</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <label>
                            Search:
                            <input type="text" name="search" className="form-control mr-sm-2" />
                        </label>
                        <input type="submit" value="Submit" className="btn btn-outline-success my-2 my-sm-0" />
                    </form>
                </div>
            </nav>
        );
    }
}

export default Header;
