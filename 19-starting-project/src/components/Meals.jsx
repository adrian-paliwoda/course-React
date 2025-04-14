import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import MealItem from "./MealItem.jsx";

const requestConfig = {};

export default function Meals({
  loadingText = "Fetching your meals...",
  fallbackText = "No meals avaiable.",
}) {
  const {
    data: meals,
    error,
    loading: isFetching,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  return (
    <>
      {error && <Error title="An error occurred!" message={error.message} />}
      {isFetching && <p className="fallback-text center">{loadingText}</p>}
      {!isFetching && meals.length === 0 && (
        <p className="fallback-text center">{fallbackText}</p>
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
