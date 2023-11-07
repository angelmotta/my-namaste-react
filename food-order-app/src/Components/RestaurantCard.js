const RestaurantCard = (props) => {
    const { restData } = props;
    const { title, full_image } = restData;
    const { eta } = restData.additional_information;

    return (
        <div className="rest-card">
            <div className="rest-pic-container">
                <img className="pic-rest" src={full_image} />
            </div>
            <div className="rest-description">
                <div className="rest-name">{title}</div>
                <div className="delivery-time">{eta}</div>
            </div>
        </div>
    );
};

export default RestaurantCard;
