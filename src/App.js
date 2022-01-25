import { useStateValue } from "./Context/StateProvider";
import "./index.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <div className="bg-gray-900 h-12  w-full flex items-center px-4 underline text-white">
        <span>Hello BoilerplateV2</span>
      </div>
      <div className="bg-gray-900 flex p-4 flex-grow w-full text-white">
        <span>Server> Hello, No0bDev3l0per#3031</span>
      </div>
      <div className="bg-black flex items-center p-4 h-12 w-full text-white text-sm">
        <span>©2022 Developed by Twitter@0xreeko | Curated by {"<anon>"}</span>
      </div>
    </div>
  );
}

export default App;
