import { useState, useCallback,useEffect,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [data, setData] = useState("");
  const passRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) {
      str = str + "123456789";
    }
    if (char) {
      str = str + "!@#$%^&*";
    }
    for (let i = 1; i <= length; i++) {
      let rnd = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(rnd);
    }
    setData(pass);
  }, [length, number, char, setData]);
const copyPassToClip=useCallback(()=>{
  passRef.current?.select()
window.navigator.clipboard.writeText(data);
},[data])
useEffect(()=>{
passwordGenerator();
},[length, number, char,setData])
  return (
    <>
      <div className="h-screen w-full bg-black">
        <div className="w-full max-w-md mx-auto h-30 shadow-md rounded-lg px-1 my-8 text-orange-500 bg-gray-500">
          <h2 className="text-white text-center my-1">Password Generator</h2>
          <input
            type="text"
            value={data}
            className="outline-none w-90  py-1 px-3 bg-white rounded-l-lg"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 rounded-r-lg h-8 hover:bg-blue-600" onClick={copyPassToClip}>
            Copy
          </button>
          <div className=" flex flex-row gap-3">
            <div>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
              <input
                className="ml-2"
                type="checkbox"
                defaultChecked={char}
                id="charInput"
                onChange={() => {
                  setChar((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
