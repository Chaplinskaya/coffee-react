import { Component } from "react";
import { Link } from "react-router-dom";

import logoWhite from "../../img/coffee-beans.png";
import logoBlack from "../../img/beans-black.png";

import "./Menu.css";

class Menu extends Component {
    render() {
        const { theme } = this.props; // отримуємо пропс: 'light' або 'dark'
        const logo = theme === "dark" ? logoBlack : logoWhite;
        return (

            <div className={`header-logo-menu ${theme}`}>
                <img className="logo" src={logo} alt="Logo" />
                <nav className="menu">
                    <ul className="menu-list">
                        <li><Link to="/">Coffee house</Link></li>
                        <li><Link to="/ourcoffee">Our coffee</Link></li>
                        <li><Link to="/ourcoffeeitem">For your pleasure</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu;
