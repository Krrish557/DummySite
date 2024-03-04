import Navbar from "../mainPage/navbar";
import Footer from "../shopPage/components/ShopFooter";
import InsertForm from "./components/InsertForm";
import Break from "../shopPage/components/Break";
import DeleteItems from "./components/DeleteItems";
import { useLocation } from "react-router-dom";

function AdminDashboard() {
  const location = useLocation();
  const username = location.state || null;

  if (username === null || username === undefined) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div>
      <Navbar />
      <Break />
      <Break />
      <InsertForm />
      <Break />
      <DeleteItems />
      <Footer />
    </div>
  );
}

export default AdminDashboard;
