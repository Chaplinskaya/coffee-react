import { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
    render() {
        const { id, image, title, description, price, country, showCountry } = this.props;
        return (
            <Link to={`/ourcoffee/${id}`} className="card-link">
                <div className="card">
                    <img src={image} alt={title} className="card-image" />

                    {description && <p className="card-description">{description}</p>}

                    {title && <h3 className="card-origin">Country: {title}</h3>}

                    {price && <p className="card-price">{price}$</p>}

                    {showCountry && <p className="card-country">{country}</p>}

                    {description && <p className="card-description">{description}</p>}
                </div>
            </Link>
        )
    }
}
export default Card;