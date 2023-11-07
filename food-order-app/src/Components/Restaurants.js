import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const myrest = {
    id: "13031",
    title: "Chinawok - Chifa",
    image: "restaurants_background/pechinawok-1665756112379.jpg",
    hidden: false,
    full_image:
        "https://images.rappi.pe/restaurants_background/pechinawok-1665756112379.jpg",
    additional_information: {
        store_id: 13031,
        store_type: "restaurant",
        eta: "30 min",
        guest_enabled: true,
        home_type: "by_stores",
        deep_link: {
            store_id: "13031",
            brand_name: "Chinawok - Chifa",
            store_type: "restaurant",
        },
    },
};

const Restaurants = () => {
    const [listRestaurants, setListRestaurants] = useState([]);

    useEffect(() => {
        console.log(`useEffect called: fetchDataRestaurants`);
        fetchRestData();
    }, []);

    const fetchRestData = async () => {
        console.log(`fetch restData`);
    };

    return listRestaurants.length === 0 ? (
        <div className="body">
            <div className="restaurants-container">Loading...</div>
        </div>
    ) : (
        <div className="body">
            {/* <Filter /> */}
            <div className="restaurants-container">
                <RestaurantCard restData={myrest} />
            </div>
        </div>
    );
};

export default Restaurants;
