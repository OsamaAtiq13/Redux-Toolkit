import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  fetchUser,
  fetchPosts,
} from "./Redux/Counter";
import React from "react";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(34))}
        >
          incrementByAmount
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(fetchUser())}
        >
          Get User Data
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(fetchPosts())}
        >
          Get Posts
        </button>
      </div>
    </div>
  );
}

export default App;
