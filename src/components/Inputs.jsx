import { useState } from "react";
import SearchLogo from "../assets/se.svg";

export default function Inputs({setUnit, setCity}) {

  const [inputCity, setInputCity] = useState("");
  

  return (
    <div className="inputs-container">
      <div className="input-container">
        <input onChange={(e) => { setInputCity(e.target.value); }}
          className="inputs-style"
          type="text"
          placeholder="search for city..."
        ></input>
        <img onClick={() => { setCity(inputCity); }} className="img-style" src={SearchLogo} />
      </div>
      <div className="unit-container">
        <div onClick={() => { setUnit("C"); }} className="unit-common unit-div">C</div>
        <div className="unit-common">|</div>
        <div onClick={() => { setUnit("F"); }} className="unit-common unit-div">F</div>
      </div>
    </div>
  );
}
