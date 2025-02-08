import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";

const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        // const response = await fetch("http://localhost:3000/places2");
        const response = await fetch("http://localhost:3000/places");
        const responseData = await response.json();

        if (!response.ok) {
          const error = new Error("Failed to fetch places");
          throw error;
        }

        setAvailablePlaces(responseData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later",
        });
        console.log("Cannot fetch places!");
      }

      setIsLoading(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occured!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingPlaces="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
