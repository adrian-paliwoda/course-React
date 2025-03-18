import { useFetch } from "../hooks/useFetch";
import { fetchMeals } from "../utils/gateway";
import Error from "./Error.jsx";
import MealItem from "./MealItem.jsx";

export default function Meals({
  loadingText = "Fetching your meals...",
  fallbackText = "No meals avaiable.",
}) {
  const {
    isFetching,
    error,
    fetchedData: meals,
    setFetchedData: setMeals,
  } = useFetch(fetchMeals, []);

  return (
    <>
      {error && <Error title="An error occurred!" message={error.message} />}
      {isFetching && <p className="fallback-text">{loadingText}</p>}
      {!isFetching && meals.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!error && !isFetching && meals.length > 0 && (
        <ul id="meals">
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </>
  );
}
