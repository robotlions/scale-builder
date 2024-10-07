import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { keyArray } from "./Data/ScaleObjects";
import { intToKey } from "./Data/ScaleObjects";


function App() {
  const [currentKey, setCurrentKey] = useState(1);
  const [currentScale, setCurrentScale] = useState("Major");
  const [active, setActive] = useState(1);

  function convertKey(interval) {
    let x = currentKey + interval;
    if (x > 12) {
      x = x - 12;
    }
    return x;
  }

  const KeyButton = ({ id, keyName, isActive, value }) => {
    return (
      <button
        id={id}
        value={value}
        type="button"
        className={
          isActive ? "keyButton btn btn-secondary buttonActive" : "keyButton btn btn-secondary"
        }
        onClick={(e) => {
          setCurrentKey(Number(e.target.value));
          setActive(Number(e.target.value));
        }}
      >
        {keyName}
      </button>
    );
  };

  return (
    <div className="container App">
      <div className="row">
        <div className="col">
          {/* <p>Current Key = {intToKey[currentKey]}</p> */}
          <p>Current Scale = {currentScale}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {keyArray.map((item) => (
            <KeyButton
              isActive={active === item.idNo}
              keyName={item.keyName}
              value={item.idNo}
            />
          ))}
        </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-1 intervalHeader">
        <p className="intervalHeaderText">1</p>
        </div>
       
          <div className="col-1 intervalHeader">
        <p className="intervalHeaderText">2</p>
        </div>
      
        <div className="col-1 intervalHeader">
          <p className="intervalHeaderText">3</p>
        </div>
       
        <div className="col-1 intervalHeader">
          <p className="intervalHeaderText">4</p>
        </div>
        <div className="col-1 intervalHeader">
        <p className="intervalHeaderText">5</p>
        </div>
        <div className="col-1 intervalHeader">
        <p className="intervalHeaderText">6</p>
        </div>
        <div className="col-1 intervalHeader">
        <p className="intervalHeaderText">7</p>
        </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-1 intervalBody d-flex align-items-center justify-content-center">
        <p className="intervalBodyText">{intToKey[currentKey]}</p>
        </div>
       
        <div className="col-1 intervalBody d-flex align-items-center justify-content-center">
        <p className="intervalBodyText">{intToKey[convertKey(2)]}m</p>
        </div>
      
        <div className="col-1 intervalBody d-flex align-items-center justify-content-center">
        <p className="intervalBodyText">{intToKey[convertKey(4)]}m</p>
        </div>
       
        <div className="col-1 intervalBody d-flex align-items-center justify-content-center">
        <p className="intervalBodyText">{intToKey[convertKey(5)]}</p>
        </div>
        <div className="col-1 intervalBody d-flex align-items-center justify-content-center">
        <p className="intervalBodyText">{intToKey[convertKey(7)]}</p>
        </div>
        <div className="col-1 intervalBody d-flex align-items-center justify-content-center">
        <p className="intervalBodyText">{intToKey[convertKey(9)]}m</p>
        </div>
        <div className="col-1 intervalBody d-flex align-items-center justify-content-center">
        <p className="intervalBodyText">{intToKey[convertKey(11)]}dim</p>
        </div>
        </div>
      </div>
  );
}

export default App;
