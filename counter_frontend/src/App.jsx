import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    const newValue = value + 1;
    setValue(newValue);
    console.log(`New counted value: ${newValue}`);
  };

  const decreaseValue = () => {
    if (value > 0) {
      return setValue(value - 1);
    } else {
      console.log("Cannot decrease value beyond 0!");
    }
  };

  return (
    <>
      <div>
        <h1>Practising counter using useState hook!</h1>
      </div>
      <hr />
      <div className="value">Counter Value: {value}</div>
      <div className="buttonsdiv">
        <span>
          <button onClick={() => increaseValue()}>Increase Value</button>
        </span>
        <span>
          <button onClick={() => decreaseValue()}>Decrease Value</button>
        </span>
      </div>
      <div></div>
    </>
  );
}

export default App;
