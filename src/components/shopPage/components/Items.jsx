import { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "../items.js";

function Items() {
  const navigateTo = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleCardClicks = (index) => {
    navigateTo(`/shop/${index}`);
  };
  const filteredItems = searchQuery
    ? items.filter((item) => {
        const keywordsLowerCase = item.keyword.map((kw) => kw.toLowerCase());
        const searchQueryLowerCase = searchQuery.toLowerCase();
        return keywordsLowerCase.includes(searchQueryLowerCase);
      })
    : items;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <input
        id="searchIn"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <div id="items">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="itemCard"
            onClick={() => handleCardClicks(index)}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">Price: ${item.price}</p>
            <p className="description">{item.description.split("\n")[0]}</p>
            <p className="size">Size: {item.size}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
