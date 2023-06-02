import "./ShowCard.css";
import { Link } from "react-router-dom";

const ShowCard = ({ Show }) => {
    return (
        <div className="card-wrapper">
            <div
                className="image-container"
                style={{
                    backgroundImage: `url(${
                        Show && Show.show.image
                            ? Show.show.image.original
                            : "https://via.placeholder.com/300x400"
                    })`,
                }}
            ></div>
            <div className="content-wrapper">
                <p className="title">{Show.show.name}</p>
                {Show.show.genres && (
                    <div className="genre-container">
                        {Show.show.genres.map((genre) => (
                            <div key={genre} className="chip">
                                <span className="chip-text">{genre}</span>
                            </div>
                        ))}
                    </div>
                )}
                <div className="description">
                    {Show.show.type && <p>Type - {Show.show.type}</p>}
                    {Show.show.language && (
                        <p>Language - {Show.show.language}</p>
                    )}
                </div>
                <Link to={`/${Show.show.id}`} className="link" state={Show}>
                    <button className="button view-details-button">
                        Summary
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ShowCard;
