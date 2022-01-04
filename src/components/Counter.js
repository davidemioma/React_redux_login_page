import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);

  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(counterActions.increment());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseByHandler = () => {
    dispatch(counterActions.increaseBy(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseByHandler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
