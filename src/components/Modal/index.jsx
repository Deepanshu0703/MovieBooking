import "./Modal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ showModal, toggleModal, Show }) => {
    const navigate = useNavigate();
    const [ticketCount, setTicketCount] = useState(1);
    const [seatType, setSeatType] = useState("gold");

    if (!showModal) {
        return null;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            showId: Show.show.id,
            showName: Show.show.name,
            showTime: Show.show.schedule.time,
            showDays: Show.show.schedule.days,
            ticketCount: ticketCount,
            seatType: seatType,
        };

        let bookings = JSON.parse(localStorage.getItem("bookings"));
        if (bookings === null) {
            bookings = [];
        }
        bookings.push(data);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Tickets Booked!");
        navigate("/my-bookings");
    };

    return (
        <div className="modal" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-title">{Show.show.name}</div>
                <p className="modal-text">
                    {Show.show.schedule.days.join(", ")} at{" "}
                    {Show.show.schedule.time}
                </p>
                <p className="modal-text">Language: {Show.show.language}</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="ticketCount" className="label">
                            No of Tickets
                        </label>
                        <input
                            type="number"
                            name="ticketCount"
                            id="ticketCount"
                            className="input"
                            value={ticketCount}
                            onChange={(e) => setTicketCount(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label className="label">Seat Type </label>
                        <select
                            className="input"
                            name="seatType"
                            id="seatType"
                            value={seatType}
                            onChange={(e) => setSeatType(e.target.value)}
                        >
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="bronze">Bronze</option>
                        </select>
                    </div>

                    <div className="button-container">
                        <button
                            type="button"
                            className="button cancel-button"
                            onClick={toggleModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="button confirm-button"
                            onClick={handleSubmit}
                        >
                            Book Tickets
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
