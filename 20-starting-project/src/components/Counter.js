import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increase, toggle } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatcher = useDispatch();
  
  const toggleCounterHandler = () => {
    dispatcher(toggle())
  };

  const incrementHandler = () => {
    dispatcher(increment());
  }
  
  const increaseHandler = (number) => {
    dispatcher(increase({amount: number}));
  }
  
  const decrementHandler = () => {
    dispatcher(decrement());
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div> }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
