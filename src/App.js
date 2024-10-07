import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const intToKey = {
  1: "C",
  2: "Db",
  3: "D",
  4: "Eb",
  5: "E",
  6: "F",
  7: "Gb",
  8: "G",
  9: "Ab",
  10: "A",
  11: "Bb",
  12: "B",
};

const keyArray = [
  { idNo: 1, keyName: "C" },
  { idNo: 2, keyName: "Db" },
  { idNo: 3, keyName: "D" },
  { idNo: 4, keyName: "Eb" },
  { idNo: 5, keyName: "E" },
  { idNo: 6, keyName: "F" },
  { idNo: 7, keyName: "Gb" },
  { idNo: 8, keyName: "G" },
  { idNo: 9, keyName: "Ab" },
  { idNo: 10, keyName: "A" },
  { idNo: 11, keyName: "Bb" },
  { idNo: 12, keyName: "B" },
];

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
          isActive ? "btn btn-secondary buttonActive" : "btn btn-secondary"
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
      <div class="row">
        <div class="col">
          {/* <p>Current Key = {intToKey[currentKey]}</p> */}
          <p>Current Scale = {currentScale}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
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
        <div class="row justify-content-center">
          <div class="col-1">
        <p>1</p>
        </div>
       
          <div class="col-1">
        <p>2</p>
        </div>
      
          <div class="col-1">
        <p>3</p>
        </div>
       
          <div class="col-1">
        <p>4</p>
        </div>
        <div class="col-1">
        <p>5</p>
        </div>
        <div class="col-1">
        <p>6</p>
        </div>
        <div class="col-1">
        <p>7</p>
        </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-1">
        <p>{intToKey[currentKey]}</p>
        </div>
       
          <div class="col-1">
        <p>{intToKey[convertKey(2)]}m</p>
        </div>
      
          <div class="col-1">
        <p>{intToKey[convertKey(4)]}m</p>
        </div>
       
          <div class="col-1">
        <p>{intToKey[convertKey(5)]}</p>
        </div>
        <div class="col-1">
        <p>{intToKey[convertKey(7)]}</p>
        </div>
        <div class="col-1">
        <p>{intToKey[convertKey(9)]}m</p>
        </div>
        <div class="col-1">
        <p>{intToKey[convertKey(11)]}dim</p>
        </div>
        </div>
      </div>
  );
}

export default App;
