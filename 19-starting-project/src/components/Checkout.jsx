import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/userProgressContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const totalAmount = cartContext.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleClose() {
    progressContext.hideCheckout();
  }

  return (
    <Modal open={progressContext.progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

        <Button onClick={handleClose}>Close</Button>
      </form>
    </Modal>
  );
}
