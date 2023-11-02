import { useState } from "react";
const Filter = ({ listOfDishes, setListOfDishes }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="filter-container">
            <input
                type="text"
                placeholder="Comidas"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            ></input>
            <button
                className="btn-search"
                onClick={() => {
                    console.log("search:", searchText);
                    const filteredList = [];
                    listOfDishes.forEach((element) => {
                        let nameDish = element.name.toLowerCase();
                        if (nameDish.includes(searchText)) {
                            filteredList.push(element);
                        }
                    });
                    setListOfDishes(filteredList);
                }}
            >
                {/* <IconSearch /> */}
                buscar
            </button>
            <button className="filter-btn">Top Restaurants</button>
        </div>
    );
};

export default Filter;
