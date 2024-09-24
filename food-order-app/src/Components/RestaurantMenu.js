import DishCard from "./DishCard";
import { useState } from "react";
import ShimmerContainer from "./Shimmer";
import Filter from "./Filter";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const [filteredList, setFilteredList] = useState([]);
    const listOfDishes = useRestaurantMenu(restId, setFilteredList);
    console.log(`Render body component`);

    // Creation of Components based on 'filteredList' state
    let listDishComponents = filteredList.map((dishElem) => (
        <DishCard key={dishElem.id} dishData={dishElem} />
    ));

    return listOfDishes.length === 0 ? (
        <div className="body">
            <Filter
                listOfDishes={listOfDishes}
                setFilteredList={setFilteredList}
            />
            <ShimmerContainer />
        </div>
    ) : (
        <div className="body">
            <Filter
                listOfDishes={listOfDishes}
                setFilteredList={setFilteredList}
            />
            <div className="dishes-container">{listDishComponents}</div>
        </div>
    );
};

export default RestaurantMenu;
