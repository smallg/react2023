import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, addToNum } from "../store/modules/counterStore";

const Counter = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addToNum(10))}>Add 10</button>
      <button onClick={() => dispatch(addToNum(20))}>Add 20</button>
      Counter: {count}
    </div>
  )
};

export default Counter;