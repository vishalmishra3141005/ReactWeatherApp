import SearchLogo from "../assets/se.svg";

export default function Inputs() {
  return (
    <div className="inputs-container">
      <div className="input-container">
        <input
          className="inputs-style"
          type="text"
          placeholder="search for city..."
        ></input>
        <img className="img-style" src={SearchLogo} />
      </div>
      <div className="unit-container">
        <div className="unit-common unit-div">C</div>
        <div className="unit-common">|</div>
        <div className="unit-common unit-div">F</div>
      </div>
    </div>
  );
}
