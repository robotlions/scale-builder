import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { keyArray } from "./Data/ScaleObjects";
import { intToKey } from "./Data/ScaleObjects";
import { scaleArray } from "./Data/ScaleObjects";
import { intervalSteps } from "./Data/ScaleObjects";
import { minorSteps } from "./Data/ScaleObjects";

function App() {
  const [currentKey, setCurrentKey] = useState(1);
  const [currentScale, setCurrentScale] = useState("Major");
  const [active, setActive] = useState(1);
  const [activeScale, setActiveScale] = useState(1);
  const [scaleDegree, setScaleDegree] = useState(1);

  function convertKey(interval) {
    let x = currentKey + interval;
    if (x > 12) {
      x = x - 12;
    }
    return x;
  }

  function convertScaleIntervals(interval) {
    let x = scaleDegree + interval;
    if (x > 7) {
      x = x - 7;
    }
    return x;
  }

  function applyIntervalSteps(numOfDegrees) {
    let x = 0;
    for (let i = 0; i < numOfDegrees; i++) {
      let sdi = scaleDegree + i;
      if (sdi > 7) {
        sdi = sdi - 7;
      }
      x = x + intervalSteps[sdi];
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
          isActive
            ? "keyButton btn btn-secondary buttonActive"
            : "keyButton btn btn-secondary"
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

  const ScaleButton = ({
    id,
    scaleName,
    isActiveScale,
    value,
    scaleDegree,
  }) => {
    return (
      <button
        id={id}
        value={value}
        type="button"
        className={
          isActiveScale
            ? "scaleButton btn btn-secondary buttonActive"
            : "scaleButton btn btn-secondary"
        }
        onClick={(e) => {
          setCurrentScale(Number(e.target.value));
          setActiveScale(Number(e.target.value));
          setScaleDegree(scaleDegree);
        }}
      >
        {scaleName}
      </button>
    );
  };

  return (
    <div className="container App">
      <div style={{ display: "none" }}>
        <h1>
          Convert and find chords for scales and modes for guitar. Chord
          converter. Chord finder. Scale converter. Scale finder. Mode
          converter. Mode finder. Online music theory chord scale mode finder
          converter tool for guitar.
        </h1>
      </div>
     
      <div className="row">
      <div style={{ display: "none" }}>
        <h2>
          Tonic root key scale degree chord mode finder converter tool. Find and convert mode scale key.
        </h2>
      </div>
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
      <div className="row">
        <div className="col">
          {scaleArray.map((item) => (
            <ScaleButton
              isActiveScale={activeScale === item.idNo}
              scaleName={item.scaleName}
              value={item.idNo}
              scaleDegree={item.scaleDegree}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-3 col-lg-1 panelWrapper">
        <div className="intervalHeader">
          <p className="intervalHeaderText">1</p></div>
          <div className="intervalBody d-flex align-items-center justify-content-center">
          <p className="intervalBodyText">
            {intToKey[currentKey]}
            {minorSteps[convertScaleIntervals(0)]}
          </p>
          </div>
        </div>

        <div className="col-3 col-lg-1 panelWrapper">
        <div className="intervalHeader">
          <p className="intervalHeaderText">2</p></div>
          <div className="intervalBody d-flex align-items-center justify-content-center">
          <p className="intervalBodyText">
            {intToKey[currentKey]}
            {minorSteps[convertScaleIntervals(1)]}
          </p>
          </div>
        </div>

        <div className="col-3 col-lg-1 panelWrapper">
        <div className="intervalHeader">
          <p className="intervalHeaderText">3</p></div>
          <div className="intervalBody d-flex align-items-center justify-content-center">
          <p className="intervalBodyText">
            {intToKey[currentKey]}
            {minorSteps[convertScaleIntervals(2)]}
          </p>
          </div>
        </div>

        <div className="col-3 col-lg-1 panelWrapper">
        <div className="intervalHeader">
          <p className="intervalHeaderText">4</p></div>
          <div className="intervalBody d-flex align-items-center justify-content-center">
          <p className="intervalBodyText">
            {intToKey[currentKey]}
            {minorSteps[convertScaleIntervals(3)]}
          </p>
          </div>
        </div>
        <div className="col-3 col-lg-1 panelWrapper">
        <div className="intervalHeader">
          <p className="intervalHeaderText">5</p></div>
          <div className="intervalBody d-flex align-items-center justify-content-center">
          <p className="intervalBodyText">
            {intToKey[currentKey]}
            {minorSteps[convertScaleIntervals(4)]}
          </p>
          </div>
        </div>
        <div className="col-3 col-lg-1 panelWrapper">
        <div className="intervalHeader">
          <p className="intervalHeaderText">6</p></div>
          <div className="intervalBody d-flex align-items-center justify-content-center">
          <p className="intervalBodyText">
            {intToKey[currentKey]}
            {minorSteps[convertScaleIntervals(5)]}
          </p>
          </div>
        </div>
        <div className="col-3 col-lg-1 panelWrapper">
        <div className="intervalHeader">
          <p className="intervalHeaderText">7</p></div>
          <div className="intervalBody d-flex align-items-center justify-content-center">
          <p className="intervalBodyText">
            {intToKey[currentKey]}
            {minorSteps[convertScaleIntervals(6)]}
          </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
