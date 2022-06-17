import { useSelector } from "react-redux"

function CounterDisplay() { // запрос на хук
  const number = useSelector((store) => { return store.counter.number; });
  return (
    <div>
      <h1 className="CounterDisplay">{number}</h1>
    </div>
  );
}

export default CounterDisplay;