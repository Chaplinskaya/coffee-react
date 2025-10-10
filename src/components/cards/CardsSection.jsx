import { Component } from "react";
import "./CardsSection.css";

class CardsSection extends Component {
    render() {
        const { data, showCountry } = this.props;

        return (
            <section className="cards-section">
                <h1 className="cards-title">Our best</h1>

                <div className="cards">
                    {data.map((coffee) => (
                        <div key={coffee.id} className="card">
                            <img src={coffee.image} alt={coffee.title} className="card-image" />
                            <h3>{coffee.title}</h3>
                            {/* тільки якщо showCountry === true */}
                            {showCountry && <p className="card-country">{coffee.country}</p>}
                            <p className="card-price">{coffee.price}$</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default CardsSection;
