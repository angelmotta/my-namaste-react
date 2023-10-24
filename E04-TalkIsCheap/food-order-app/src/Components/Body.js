import DishCard from "./DishCard";
import dataList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfDishes, setListOfDishes] = useState(dataList);
    let listDishComponents = listOfDishes.map((dishElem) => (
        <DishCard key={dishElem.id} dishData={dishElem} />
    ));

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const dataRes = await fetch(
            "https://services.rappi.pe/api/web-gateway/web/restaurants-bus/store/id/13031/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: process.env.API_KEY,
                },
                body: JSON.stringify({
                    lat: -12.1613522,
                    lng: -76.9697293,
                    store_type: "restaurant",
                    is_prime: false,
                    prime_config: {
                        unlimited_shipping: false,
                    },
                }),
            }
        );
        if (dataRes.ok) {
            const dataObj = await dataRes.json();
            const dishesListChinaWok = dataObj?.corridors[0]?.products;
            helperSetAvgRating(dishesListChinaWok);
            setListOfDishes(dishesListChinaWok);
        } else {
            console.log("fetch operation not ok");
        }
    };

    const helperSetAvgRating = (listDishes) => {
        for (const dish of listDishes) {
            let myrand = Math.random() * 5;
            let myrandAvg = Math.round(myrand * 100) / 100;
            if (myrandAvg < 2) {
                console.log(myrandAvg);
                myrandAvg = myrandAvg + 2.0;
                myrandAvg = Math.round(myrandAvg * 100) / 100;
                console.log(myrandAvg);
            }
            dish.avgRating = myrandAvg;
        }
        console.log(listDishes);
    };

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = listOfDishes.filter(
                            (elem) => elem.avgRating > 4
                        );
                        console.log(filteredList);
                        setListOfDishes(filteredList);
                    }}
                >
                    Top Restaurants
                </button>
            </div>
            <div className="dishes-container">{listDishComponents}</div>
        </div>
    );
};

export default Body;
