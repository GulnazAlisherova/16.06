import { useDispatch } from "react-redux";

export default function CounterControls() {
  const dispatch = useDispatch();
  return (
    <div className="CounterControls">
      <button onClick={() => dispatch({ type: 'counter/increment'})}>+</button>
      <button onClick={() => dispatch({ type: 'counter/decrement'})}>-</button>
      <button onClick={() => dispatch({ type: 'counter/reset'})}>Reset</button>
    </div>
  )
}