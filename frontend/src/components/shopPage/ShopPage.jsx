import { useParams } from "react-router-dom";
import Navbar from "../mainPage/navbar.jsx";
import Footer from "./components/ShopFooter.jsx";
import Break from "./components/Break.jsx";
import { useState, useEffect } from "react";
import "./ShopPage.css";

function ShoppingPage() {
  const { itemId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const selectedItem = items.find((item) => item.key.toString() === itemId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedItem) {
    return (
      <div>
        <Navbar />
        <Break />{" "}
        <div className="container">
          <div className="content">
            <h1 className="heading">404 NotFound</h1>
            <p className="subheading">
              The page you&apos;re looking for does not exist.
            </p>
          </div>
        </div>
        <Footer className="shop-page-footer" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Break />
      <div className="shop-item-container">
        <div className="shop-item-details">
          <img
            src={selectedItem.img}
            alt={selectedItem.name}
            className="shop-img"
          />
          <div className="shop-item-text">
            <h1 className="title">{selectedItem.name}</h1>
            <p className="price">Price: ${selectedItem.price}</p>
            <p className="description">{selectedItem.desc}</p>
            <p className="sizes">Sizes: {selectedItem.sizes.join(", ")}</p>
          </div>
        </div>
      </div>
      <Footer className="shop-page-footer" />
    </div>
  );
}

export default ShoppingPage;
