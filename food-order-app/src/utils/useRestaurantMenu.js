import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantMenu = (restaurantId, setFilteredList) => {
    console.log(`custom hook called: useRestaurantMenu`);

    const [listOfDishes, setListOfDishes] = useState([]);
    // const [filteredList, setFilteredList] = useState([]);

    // fetchDataMenu
    useEffect(() => {
        console.log(`useEffect called: fetchDataMenu`);
        fetchDataMenu();
    }, []);

    const fetchDataMenu = async () => {
        const dataRes = await fetch(RESTAURANT_MENU_URL + restaurantId + "/", {
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
        });
        if (dataRes.ok) {
            const dataObj = await dataRes.json();
            console.log(`FetchData menu 200:`);
            console.log(dataObj);

            const dishesList = dataObj?.corridors[0]?.products;
            helperSetAvgRating(dishesList);
            setListOfDishes(dishesList);
            setFilteredList(dishesList);
        } else {
            console.log("fetch operation error");
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

    return listOfDishes;
};

export default useRestaurantMenu;
