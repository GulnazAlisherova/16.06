import { useSelector } from "react-redux"

function CounterDisplay() {
  const number = useSelector((store) => {
    return store.counter.number;
  });
  return (
    <h1 className="CounterDisplay">{number}</h1>
  );
}

export default CounterDisplay;