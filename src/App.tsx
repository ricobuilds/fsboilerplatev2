import { useState } from "react";
import "./index.css";
import { useToggleHook } from "./hooks/useToggleHook";

function App() {
  const [isToggle, toggle] = useToggleHook(false);

  let name: string = "No0bDev3l0per#3031";
  let age: number = 1;

  const [country, setCountry] = useState<string | null>("UK");

  return (
    <div className={`${isToggle ? "dark" : ""}`}>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-[#231F20]">
        <div className="content">
          <p className="text-white">
            {name} is {age} years old and lives in {country}
          </p>
          <input
            type="text"
            className="p-1 rounded outline-none"
            placeholder="enter your country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <div className="text-white" onClick={toggle}>
            click me
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
