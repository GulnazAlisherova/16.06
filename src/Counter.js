import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";
import CounterSet from "./CounterSet";

export default function Counter() {
  return (
    <div className="Counter">
      <CounterDisplay />
      <CounterControls />
      <CounterSet />
    </div>
  )
}