import { Component } from "react";
import Card from "./Card";
import "./CardsSection.css";

class CardsSection extends Component {
    render() {
        const { data, showCountry, withBg, showTitle, paddingCustom } = this.props;

        return (
            <section className={`cards-section ${withBg ? 'cards-section--with-bg' : ''}`} style={{ padding: paddingCustom }}>
                {showTitle && <h2 className="cards-title">Our best</h2>}

                <div className="cards">
                    {data.map((coffee) => (
                        <Card
                            key={coffee.id}
                            id={coffee.id}
                            image={coffee.image}
                            title={coffee.title}
                            //description={coffee.description}
                            price={coffee.price}
                            country={coffee.country}
                            showCountry={showCountry}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default CardsSection;
