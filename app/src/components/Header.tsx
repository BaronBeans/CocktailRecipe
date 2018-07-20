import * as React from 'react';
import { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="navbar">
                    <a className="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        );
    }
}

export default Header;
