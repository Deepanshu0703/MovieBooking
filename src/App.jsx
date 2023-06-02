import { Navbar, Home, ShowDetails, Bookings } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<ShowDetails />} />
                <Route path="/my-bookings" element={<Bookings />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
};

export default App;
