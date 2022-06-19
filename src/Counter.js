import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";
import CounterSet from "./CounterSet";

function Counter() {
  return ( 
    <div className="Counter">
   <CounterDisplay />
   <CounterControls />
   <CounterSet />
    </div>
   );
}

export default Counter;