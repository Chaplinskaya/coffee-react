import { Component } from "react";
import Menu from "../menu/Menu"; // імпорт Menu
import "./Footer.css";

class Footer extends Component {
    render() {
        const { image } = this.props;
        return (
            <div className="footer">
                <Menu theme="dark" />
                {image && (
                    <div className="footer-divider">
                        <span className="line"></span>
                        <img src={image} alt="footer icon" className="footer-icon" />
                        <span className="line"></span>
                    </div>
                )}
            </div>
        )
    }
}

export default Footer;