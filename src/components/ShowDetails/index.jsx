import "./ShowDetails.css";
import { Link, useLocation } from "react-router-dom";
import { Modal } from "../index";
import { useState } from "react";

const ShowDetails = () => {
    const location = useLocation();
    const Show = location.state;

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className="show-main-container">
                <div className="show-details-wrapper">
                    <div className="back-button-wrapper">
                        <Link to="/">
                            <button className="button">Back</button>
                        </Link>
                    </div>
                    <img
                        className="show-image"
                        src={
                            Show && Show.show.image
                                ? Show.show.image.original
                                : "https://via.placeholder.com/300x400"
                        }
                    />
                    <div className="show-info">
                        <h2 className="show-language">{Show.show.language}</h2>
                        <h1 className="show-title">{Show.show.name}</h1>

                        {Show.show && Show.show.summary && (
                            <p
                                className="show-description"
                                dangerouslySetInnerHTML={{
                                    __html: Show.show.summary,
                                }}
                            ></p>
                        )}

                        <div className="genre-container">
                            <span className="">Genre: </span>
                            {Show.show.genres.map((genre) => (
                                <div key={genre} className="chip">
                                    <span className="chip-text">{genre}</span>
                                </div>
                            ))}
                        </div>

                        <ul className="show-info-list">
                            <li className="list-item">
                                Status : {Show.show.status}
                            </li>
                            <li className="list-item">
                                Type: {Show.show.type}
                            </li>
                            {Show.show.premiered && (
                                <li className="list-item">
                                    Premiered: {Show.show.premiered}
                                </li>
                            )}
                            {Show.show.ended && (
                                <li className="list-item">
                                    Ended: {Show.show.ended}
                                </li>
                            )}
                            {Show.show.rating.average && (
                                <li className="list-item">
                                    <span>
                                        Rating: {Show.show.rating.average}
                                    </span>
                                </li>
                            )}
                            {Show.show.schedule.time != "" && (
                                <li className="list-item">
                                    <span>
                                        Schedule:{" "}
                                        {Show.show.schedule.days.join(", ")} at{" "}
                                        {Show.show.schedule.time}
                                    </span>
                                </li>
                            )}
                        </ul>

                        {Show.show.status === "Ended" && (
                            <p className="show-status">
                                This show has ended. No more episodes will be
                                released.
                            </p>
                        )}

                        {Show.show.status === "Running" && (
                            <button
                                className="button book-ticket-button"
                                onClick={toggleModal}
                            >
                                Book
                            </button>
                        )}

                        {Show.show.status === "In Development" && (
                            <p className="show-status">
                                This show is in development. No episodes have
                                been released yet. Booking will be available as
                                soon as the first episode is released.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Modal
                showModal={showModal}
                toggleModal={toggleModal}
                Show={Show}
            />
        </>
    );
};

export default ShowDetails;
