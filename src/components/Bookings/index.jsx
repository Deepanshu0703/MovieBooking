import { useEffect, useState } from "react";
import "./Bookings.css";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const bookings = JSON.parse(localStorage.getItem("bookings"));
        if (bookings === null) {
            setBookings([]);
        } else {
            setBookings(bookings);
        }
    }, []);

    return (
        <div className="bookings">
            <h1>My Bookings</h1>
            {bookings && bookings.length === 0 ? (
                <h2>No Bookings</h2>
            ) : (
                <div className="bookings-wrapper">
                    {bookings.map((booking, index) => (
                        <div className="booking" key={index}>
                            <h2>{booking.showName}</h2>
                            <p>
                                {booking.showDays.join(", ")} at{" "}
                                {booking.showTime}
                            </p>
                            <p>Tickets: {booking.ticketCount}</p>
                            <p>Seat Type: {booking.seatType}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bookings;
