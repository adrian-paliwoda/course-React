import { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartContext = useContext(CartContext)


  function handleAddMealToCart() {
    cartContext.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h1>{meal.name}</h1>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart} textOnly={false} >Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
