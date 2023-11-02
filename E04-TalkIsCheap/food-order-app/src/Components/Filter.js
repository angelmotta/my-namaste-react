import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
const Filter = ({ listOfDishes, filteredList, setFilteredList }) => {
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
                    const resFilteredList = [];
                    listOfDishes.forEach((element) => {
                        let nameDish = element.name.toLowerCase();
                        if (nameDish.includes(searchText)) {
                            resFilteredList.push(element);
                        }
                    });
                    setFilteredList(resFilteredList);
                    console.log(resFilteredList);
                }}
            >
                <IconSearch />
                {/* buscar */}
            </button>
            <button
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfDishes.filter(
                        (elem) => elem.avgRating > 4
                    );
                    console.log(filteredList);
                    setFilteredList(filteredList);
                }}
            >
                Top Restaurants
            </button>
        </div>
    );
};

export default Filter;
