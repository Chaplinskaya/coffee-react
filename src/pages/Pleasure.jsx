import { Component } from "react";
import Header from "../components/header/Header";
import CardsSection from "../components/cards/CardsSection";
import Footer from "../components/footer/Footer";
import { coffeeData } from "../data/coffeeData";
import pleasureBg from "../img/pleasure-coffee.png";
import pleasureImg from "../img/pleasure-about.png";
import "./Pleasure.css";

class Pleasure extends Component {
    render() {
        return (
            <div className="page-pleasure">
                <Header backgroundImage={pleasureBg} title="For you pleasure" />
                <div className="page-our-coffee">
                    {/* Блок картинки */}
                    {pleasureImg && <img src={pleasureImg} alt="Coffee" className="about-image" />}

                    {/* Текстовий блок */}
                    <div className="about-text">
                        <h2 className="about-title">About Us</h2>
                        <p className="about-description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br /><br />

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
                    </div>

                </div>
                <div className="divider"></div>
                <CardsSection data={coffeeData} paddingCustom="10px 0 50px" />
                <Footer />
            </div>
        );
    }
}

export default Pleasure;

