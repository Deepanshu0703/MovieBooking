import { useState, useEffect } from "react";
import { ShowCard } from "../index";
import "./Home.css";

const Home = () => {
    const [showData, setShowData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}`);

                if (response.status !== 200) {
                    throw new Error("Request failed");
                } else {
                    const data = await response.json();

                    setShowData(data);
                    setIsLoading(false);
                }
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="show-wrapper">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {showData && (
                <div className="show-container">
                    {showData.map((Show) => (
                        <div key={Show.show.id} className="card-container">
                            <ShowCard Show={Show} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
