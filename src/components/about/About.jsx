import { Component } from "react";
import "./About.css";

class About extends Component {
    render() {
        const { image } = this.props; //
        return (
            <div className="about-section">
                {/* Блок картинки */}
                {image && <img src={image} alt="Coffee" className="about-image" />}

                {/* Текстовий блок */}
                <div className="about-text">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br /><br />

                        Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
                </div>
            </div>
        )
    }
}

export default About;