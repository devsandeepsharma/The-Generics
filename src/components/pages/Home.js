import { useCallback, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

import Header from "../Layout/Header";
import MoviesCard from "../UI/MoviesCard";
import MoviesForm from "../UI/MoviesForm";
import Footer from "../Layout/Footer";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retrying, setRetrying] = useState(true);

    const fetchMovies = useCallback( async () => {
        setLoading(true)
        setError(null);
        try {
            const res = await fetch("https://myecommerse-3e28e-default-rtdb.europe-west1.firebasedatabase.app/movies.json");

            if(!res.ok) {
                throw new Error("Something went wrong ....");
            }

            const moviesData = await res.json();

            const fetchedData = [];

            for(const key in moviesData) {
                fetchedData.push({
                    id: key,
                    title: moviesData[key].title,
                    summary: moviesData[key].openingText,
                    release: moviesData[key].releaseDate
                })
            }

            setMovies(fetchedData);
        } catch (error) {
            setError(error.message);
            setRetrying(true);
        }
        setLoading(false)
    }, []);

    useEffect(() => {
        if (error && retrying) {
            const retryTimeout = setTimeout(() => {
                fetchMovies();
            }, 5000);
            return () => clearTimeout(retryTimeout); 
        }
    }, [error, retrying]);

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Container>
                    <MoviesForm />
                    <div className="p-5 bg-secondary-subtle">
                        <p className="p-3 fs-1 fw-bold text-center">The Generics</p>
                        <Button className="d-block m-auto" onClick={fetchMovies}>Fetch Movies</Button>
                    </div>
                    <h1 className="py-3">Movies Page</h1>
                    <Row xs={1} md={2} className="g-4">
                        {loading && <h2>Loading...</h2>}
                        {error && (
                            <div>
                                <p className="fs-4">
                                    {error} <span className="fw-bold">{retrying ? "Retrying..." : "Stopped"}</span>
                                </p>
                                {retrying && (
                                    <Button
                                        className="mt-2"
                                        variant="dark"
                                        onClick={() => setRetrying(false)}
                                    >
                                        Stop Retrying
                                    </Button>
                                )}
                            </div>
                        )}
                        {
                            movies.map(movie => (
                                <MoviesCard key={movie.id} movie={movie} />
                            ))
                        }
                    </Row>
                </Container>
            </main> 
            <Footer />
        </>
    )
}

export default Home;