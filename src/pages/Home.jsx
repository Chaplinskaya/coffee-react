import { Component } from "react";

import Header from "../components/header/Header";
import About from "../components/about/About";
import CardsSection from "../components/cards/CardsSection";
import Footer from "../components/footer/Footer";
import { coffeeData } from "../data/coffeeData";

import mainBg from "../img/mainbg.jpg";
import beansIcon from "../img/beans.png";
import beansBlack from "../img/beans-black.png";
import "./Home.css";


class Home extends Component {
    render() {
        return (
            <div className="page-home">
                <Header backgroundImage={mainBg}
                    title="Everything You Love About Coffee"
                    image={beansIcon}
                    subtitle="We make every day full of energy and taste"
                    substitle="Want to try our beans?"
                    button="More" />
                <About image={beansBlack} />
                <CardsSection data={coffeeData} showCountry={false} />
                <Footer image={beansBlack} />
            </div>
        );
    }
}

export default Home;
