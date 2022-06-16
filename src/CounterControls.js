import { useState } from "react";

function CounterControls() {
  const [counter, setCounter] = useState(0);

  function onIncrement() {
    setCounter(counter + 1);
  }
  function onDecrement(){
    setCounter(counter - 1 );
  }
  return (  
   <div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
   </div>
  );
}

export default CounterControls;