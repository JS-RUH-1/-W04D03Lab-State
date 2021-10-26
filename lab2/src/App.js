import "./App.css";
import { useState } from "react";
function App() {
  const [Celsius, setCelsius] = useState();
  const [Fahrenheit, setFahrenheit] = useState();

  function convCtoF(e) {
    let label1 = e.target.value;
    setCelsius(label1);
    setFahrenheit(label1 * 1.8 + 32);
  }
  function convFtoC(e) {
    let label2 = e.target.value;
    setFahrenheit(label2);
    setCelsius((label2 - 32) * (5 / 9));
  }
  return (
    <div className="App">
      <fieldset>
        <legend style={{ margin: " 0 auto 0 0" }}>
          Enter temperature in Celsius:
        </legend>
        <input
          onChange={convCtoF}
          className="input"
          type="text"
          id="label1"
          value={Celsius}
        ></input>
      </fieldset>
      <fieldset>
        <legend style={{ margin: " 0 auto  0 0" }}>
          Enter temperature in Fahrenheit:
        </legend>
        <input
          onChange={convFtoC}
          className="input"
          type="text"
          id="label2"
          value={Fahrenheit}
        ></input>
      </fieldset>
    </div>
  );
}
export default App;
