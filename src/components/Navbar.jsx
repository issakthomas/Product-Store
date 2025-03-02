import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link className="link" to="/">
        <i className="fa-brands fa-opencart"></i>Product Store
      </Link>
      <Link className="link" to="/create">
        <i className="fa-solid fa-circle-plus"></i>
      </Link>
    </nav>
  );
};