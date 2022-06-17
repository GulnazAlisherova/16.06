import { useState } from "react";

function CounterControls() {
  const [counter, setCounter] = useState(0);

  function onIncrement() {
    setCounter(counter + 1);
  }
  function onDecrement(){
    setCounter(counter - 1 );
  }
  const reset = () =>{
    setCounter(0)
  }
  return (  
   <div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <button className="reset" onClick={reset}>Reset</button>
   </div>
  );
}

export default CounterControls;