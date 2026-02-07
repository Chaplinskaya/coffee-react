import { Component } from "react";
import Header from "../components/header/Header";
import CardsSection from "../components/cards/CardsSection";
import Footer from "../components/footer/Footer";
import { coffeeData } from "../data/coffeeData";
import mainBg from "../img/our-coffee.jpg";
import coffeeImg from "../img/coffee.png";
import beansBlack from "../img/beans-black.png";
import "./OurCoffee.css";

class OurCoffee extends Component {
    state = {
        activeCountry: "All",
        search: ""
    };

    setCountry = (country) => {
        this.setState({ activeCountry: country });
    };
    onSearchChange = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { activeCountry, search } = this.state;

        const filteredData = coffeeData
            .filter(item =>
                activeCountry === "All"
                    ? true
                    : item.country === activeCountry
            )
            .filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.country.toLowerCase().includes(search.toLowerCase())
            );

        return (
            <div className="page-our-coffee-section">
                <Header backgroundImage={mainBg}
                    title="Our Coffee" />
                <div className="page-our-coffee">
                    {/* Блок картинки */}
                    {coffeeImg && <img src={coffeeImg} alt="Coffee" className="about-image" />}

                    {/* Текстовий блок */}
                    <div className="about-text">
                        <h2 className="about-title">About Us</h2>
                        <p className="about-description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br /><br />

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
                    </div>

                </div>
                <div className="search-tabs">
                    <div className="filters">
                        <input
                            type="text"
                            placeholder="Looking for..."
                            value={search}
                            onChange={this.onSearchChange}
                            className="search-input"
                        />
                    </div>
                    <div className="tabs">
                        {["All", "Brazil", "Kenya", "Colombia"].map((country) => (
                            <button
                                key={country}
                                className={activeCountry === country ? "active" : ""}
                                onClick={() => this.setCountry(country)}
                            >
                                {country}
                            </button>
                        ))}
                    </div>
                </div>

                <CardsSection data={filteredData} showCountry={true} showTitle={false} />
                <Footer image={beansBlack} />
            </div >
        );
    }
}

export default OurCoffee;
