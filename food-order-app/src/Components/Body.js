import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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

const Body = () => {
    const [listRestaurants, setListRestaurants] = useState([]);

    useEffect(() => {
        console.log(`useEffect called: fetchDataRestaurants`);
        fetchRestData();
    }, []);

    const fetchRestData = async () => {
        console.log(`fetch restData`);
        const dataRestaurants = await fetch(RESTAURANTS_URL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: process.env.API_KEY,
            },
        });
        if (dataRestaurants.ok) {
            const restData = await dataRestaurants.json();
            const listRestObjs = restData?.widgets[2]?.data;
            console.log(listRestObjs);
            setListRestaurants(listRestObjs);
        } else {
            console.log(`fetch resData error`);
        }
    };

    return listRestaurants.length === 0 ? (
        <div className="body">
            <div className="restaurants-container">Loading...</div>
        </div>
    ) : (
        <div className="body">
            {/* <Filter /> */}
            <div className="restaurants-container">
                {listRestaurants.map((restObj) => (
                    <Link
                        key={restObj.id}
                        to={`/restaurants/${restObj.id}`}
                        className="link"
                    >
                        <RestaurantCard restData={restObj} />
                    </Link>
                ))}
                {/* <RestaurantCard restData={myrest} /> */}
            </div>
        </div>
    );
};

export default Body;
