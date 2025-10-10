import { Component } from "react";
import Menu from "../menu/Menu"; // імпорт Menu
import "./Header.css";

class Header extends Component {
    render() {
        const { backgroundImage, title, subtitle, substitle, image, button } = this.props;
        const headerStyle = {
            background: `url(${backgroundImage}) no-repeat center/cover`,
        };

        return (
            <div
                className={`header ${button ? "header--with-button" : ""}`}
                style={headerStyle}
            >
                <Menu theme="light" />
                <h1>{title}</h1>
                {image && (
                    <div className="header-divider">
                        <span className="line"></span>
                        <img src={image} alt="Header icon" className="header-icon" />
                        <span className="line"></span>
                    </div>
                )}
                {subtitle && <p>{subtitle}</p>}
                {substitle && <p>{substitle}</p>}
                {button && (
                    <div className="header-button-container">
                        <button className="header-button">{button}</button>
                    </div>
                )}
            </div>
        )
    }
}
export default Header;