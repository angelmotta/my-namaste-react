import { CDN_URL } from "../utils/constants";

const DishCard = (props) => {
    const { dishData } = props;
    const { name, description, price, avgRating } = dishData;

    return (
        <div className="dish-card">
            <div className="pic-container">
                <img className="pic-dish" src={CDN_URL + dishData.image} />
            </div>
            <div className="dish-description">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="price-rating-div">
                <div>
                    <b>S/ {price}</b>
                </div>
                <div>
                    <p>{avgRating} stars</p>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
