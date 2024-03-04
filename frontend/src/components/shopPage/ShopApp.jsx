import Navbar from "../mainPage/navbar";
import Items from "./components/Items";
import Footer from "./components/ShopFooter.jsx";
import "./ShopApp.css";
import Break from "./components/Break.jsx";
function ShopApp() {
  return (
    <div className="shopAppRoot">
      <Navbar id="shopnav" />
      <Break />
      <div id="shopP1">
        <Items />
      </div>
      <Footer />
    </div>
  );
}

export default ShopApp;
