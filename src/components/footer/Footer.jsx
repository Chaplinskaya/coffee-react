import { Component } from "react";
import Menu from "../menu/Menu"; // імпорт Menu
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Menu theme="dark" />
            </div>
        )
    }
}

export default Footer;