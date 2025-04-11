import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";

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

  function handleSubmit() {
    progressContext.hideCheckout();
  }

  return (
    <Modal open={progressContext.progress === "checkout"} onClose={progressContext.progress === "checkout" ? handleClose : null}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" onClick={handleClose} textOnly>
            Close
          </Button>
          <Button onClick={handleSubmit}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
