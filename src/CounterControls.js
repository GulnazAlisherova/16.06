import { useDispatch } from "react-redux";

function CounterControls() {
  const dispatch = useDispatch();
  return (  
    <div>
      <button onClick={() => dispatch({ type: 'counter/increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'counter/reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'counter/decrement' })}>-</button>
    </div>
  );
}

export default CounterControls;