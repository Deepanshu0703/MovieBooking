import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="nav-link">
                <span>Book Your Show</span>
            </Link>
            <Link to="my-bookings">
                <button className="button">Bookings</button>
            </Link>
        </nav>
    );
};

export default Navbar;
