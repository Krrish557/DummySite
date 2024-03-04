import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Items() {
  const navigateTo = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:6969/api/items");
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCardClicks = (index) => {
    console.log(index);
    navigateTo(`/shop/${index}`);
  };

  const filteredItems = searchQuery
    ? items.filter((item) => {
        const keywordsLowerCase = item.keywords.map((kw) => kw.toLowerCase());
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
            <p className="description">{item.desc.split("\n")[0]}</p>
            <p className="size">Size: {item.sizes.join(", ")}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
