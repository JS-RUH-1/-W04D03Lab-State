import './App.css';
import { useState } from 'react';

function App() {
  const [cel,setCel]= useState("")
  const [feh,setFeh]= useState("")
  
  const handleCel = (e)=>{
   setCel(e) 
 
   setFeh(e*(9/5)+32)

  }
  const handleFeh = (e)=>{
    setFeh(e) 

    setCel((e-32)*(5/9))

   }

  return (
    <div className="App">
    <h4> degree in Cel</h4>
     <input type={Text} value={cel} onChange={(e)=>handleCel(e.target.value)} />
     <h4> degree in Feh</h4>
     <input type={Text} value={feh} onChange={(e)=>handleFeh(e.target.value)} />


    </div>
  );
}

export default App;
