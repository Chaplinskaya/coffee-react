import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import mainBg from "../img/our-coffee.jpg";
import beansBlack from "../img/beans-black.png";
import { coffeeData } from "../data/coffeeData";
import "./OurCoffee.css";
import "./OurCoffeeItem.css";

function OurCoffeeItem() {
    const { id } = useParams();

    const coffee = coffeeData.find(
        item => item.id === Number(id)
    );

    if (!coffee) {
        return <h2>Coffee not found</h2>;
    }

    return (

        <div className="coffee-item-page">
            <Header backgroundImage={mainBg}
                title="Our Coffee" />
            <div className="page-our-coffee">
                <img
                    src={coffee.detailImage}
                    alt={coffee.title}
                    className="coffee-item-image"
                />
                <div className="about-text">
                    <div className="about-text-item">
                        <h2 className="about-title">{coffee.title}</h2>
                        <p><b>Country:</b> {coffee.country}</p>
                        <p>
                            <strong>Description:</strong>{" "}
                            {coffee.description || "Great coffee with rich aroma."}
                        </p>
                        <p><b>Price:</b> <span className="price-value"> {coffee.price}$</span></p>

                    </div>
                </div>
            </div>
            <Footer image={beansBlack} />
        </div>
    );
}

export default OurCoffeeItem;

