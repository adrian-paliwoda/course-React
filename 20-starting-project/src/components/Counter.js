import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const count = useSelector((state) => state.counter);
  const dispatcher = useDispatch();

  const incrementHandler = () => {
    dispatcher(increment());
  }
  
  const decrementHandler = () => {
    dispatcher(decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
