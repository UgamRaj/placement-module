import { Link } from "react-router-dom";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h2>
          <HomeIcon fontSize="large" />
        </h2>
      </Link>
      <h1>Search properties to rent</h1>
      <div className="navBarRight">
        <input className="searchCommon" type="text" placeholder="Search" />
        <button>Search</button>
        <Link to={"/liked"}>
          <button>Liked</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
