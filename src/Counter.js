import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

export default function Counter() {
  return(
    <div className="Counter">
      <CounterDisplay/>
      <CounterControls/>
    </div>
  )
}