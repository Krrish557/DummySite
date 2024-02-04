import { useParams } from "react-router-dom";
import items from "./items.js";
import Navbar from "../mainPage/navbar.jsx";
import Break from "./Break.jsx";
function ShoppingPage() {
  const { itemId } = useParams();
  const selectedItem = items.find((item) => item.key.toString() === itemId);

  if (!selectedItem) {
    return (
      <div>
        <Navbar />
        <Break /> Item not found
      </div>
    );
  }

  return (
    <div className="shop-item-container">
      <Navbar />
      <Break />
      <div className="shop-item-details">
        <img
          src={selectedItem.img}
          alt={selectedItem.name}
          className="shopImg"
        />
        <div className="shop-item-text">
          <h1 className="title">{selectedItem.name}</h1>
          <p className="price">Price: ${selectedItem.price}</p>
          <p className="description">{selectedItem.description}</p>
          <p className="size">Size: {selectedItem.size}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
