import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const intToKey = {
  1 : "C",
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
  12: "B"
}



function App() {

  const [currentKey, setCurrentKey] = useState(1)
  const [currentScale, setCurrentScale] = useState("Major")
  const [buttonClass, setButtonClass] = useState("btn btn-secondary")

  function convertKey(interval){
   let x = currentKey+interval
   if (x > 12){
    x=x-12
   }
   return x
  }

  return (
    <div className="container App">
      <div class="row">
        <div class="col">
      <p>Current Key = {intToKey[currentKey]}</p>
      <p>Current Scale = {currentScale}</p>
      </div></div>
      <div class="row"><div class="col">
      
      <button type="button" class={buttonClass} value={1} onClick={(e)=>setCurrentKey(Number(e.target.value))}>C</button>
      <button type="button" class={buttonClass} value={2} onClick={(e)=>setCurrentKey(Number(e.target.value))}>Db/C#</button>
      <button type="button" class={buttonClass} value={3} onClick={(e)=>setCurrentKey(Number(e.target.value))}>D</button>
      <button type="button" class={buttonClass} value={4} onClick={(e)=>setCurrentKey(Number(e.target.value))}>Eb/D#</button>
      <button type="button" class={buttonClass} value={5} onClick={(e)=>setCurrentKey(Number(e.target.value))}>E</button>
      <button type="button" class={buttonClass} value={6} onClick={(e)=>setCurrentKey(Number(e.target.value))}>F</button>
      <button type="button" class={buttonClass} value={7} onClick={(e)=>setCurrentKey(Number(e.target.value))}>Gb/F#</button>
      <button type="button" class={buttonClass} value={8} onClick={(e)=>setCurrentKey(Number(e.target.value))}>G</button>
      <button type="button" class={buttonClass} value={9} onClick={(e)=>setCurrentKey(Number(e.target.value))}>Ab/G#</button>
      <button type="button" class={buttonClass} value={10} onClick={(e)=>setCurrentKey(Number(e.target.value))}>A</button>
      <button type="button" class={buttonClass} value={11} onClick={(e)=>setCurrentKey(Number(e.target.value))}>Bb/A#</button>
      <button type="button" class={buttonClass} value={12} onClick={(e)=>setCurrentKey(Number(e.target.value))}>B</button>

</div>
<br />
     <br/>
     <p>1 = {intToKey[currentKey]}</p>
     <p>2 = {intToKey[convertKey(2)]} minor</p>
     <p>3 = {intToKey[convertKey(4)]} minor</p>
     <p>4 = {intToKey[convertKey(5)]}</p>
     <p>5 = {intToKey[convertKey(7)]}</p>
     <p>6 = {intToKey[convertKey(9)]} minor</p>
     <p>7 = {intToKey[convertKey(11)]} diminished</p>
    </div>
    </div>
  );
}

export default App;
