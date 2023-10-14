import DishCard from "./DishCard";
import dataList from "../utils/mockData";

const Body = () => {
    console.log(dataList.length);
    const listDishComponents = dataList.map((dishElem) => (
        <DishCard key={dishElem.id} dishData={dishElem} />
    ));
    return (
        <div className="body">
            <div className="search-container">Search Bar</div>
            <div className="dishes-container">{listDishComponents}</div>
        </div>
    );
};

export default Body;
