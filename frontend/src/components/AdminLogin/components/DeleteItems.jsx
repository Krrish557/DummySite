import { useState, useEffect } from "react";
import axios from "axios";
import "../loginApp.css";
function DeleteItems() {
  const [items, setItems] = useState([]);
  const [selectedItemKey, setSelectedItemKey] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
  const handleCardClick = (index, key) => {
    setSelectedItemKey(key);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:6969/api/items/${selectedItemKey}`);
      fetchItems();
      setSelectedItemKey(null);
    } catch (error) {
      console.error(error);
    }
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
      <center>
        {" "}
        <h1>Delete Items</h1>
        <br />
        <input
          id="searchIn"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginBottom: "20px" }}
        />
      </center>
      <div id="items">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="itemCard"
            onClick={() => handleCardClick(index, item.key)}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">Price: ${item.price}</p>
            <p className="description">{item.desc.split("\n")[0]}</p>
            <p className="size">Size: {item.sizes.join(", ")}</p>
          </div>
        ))}
      </div>

      {selectedItemKey && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="modal-buttons">
              <button
                className="modal-button"
                onClick={() => setSelectedItemKey(null)}
              >
                Cancel
              </button>
              <button className="modal-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteItems;
