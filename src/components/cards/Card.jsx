import { Component } from "react";
import "./Card.css";

class Card extends Component {
    render() {
        const { image, description, title, price } = this.props;
        return (
            <div className="card">
                <img src={image} alt={title} className="card-image" />

                {description && <p className="card-description">{description}</p>}

                {title && <h3 className="card-origin">Country: {title}</h3>}

                {price && <p className="card-price">{price}$</p>}
            </div>
        )
    }
}
export default Card;