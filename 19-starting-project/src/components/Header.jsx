import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header({ title = "React Food" }) {
  const cartContext = useContext(CartContext);

  function handleShowCart() {
    
  }


  const totalCartItems = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>{title}</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
