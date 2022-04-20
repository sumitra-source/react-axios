import React,{useState}from 'react'
import './App.css';
function App() {
  const [count,setCount]=useState(0);
  const[showCount,setShowCount]=useState(true);
  const[guitar,setGuitar]=useState({
    brand:'Fender',
    model:'Stratocaster'
  })
  fetch(`api.com/${song}`).then(response=>setSong({...song,artist:response.artist,song:response.song}))
  return (
    <div className="App">
    <header className="App-header">
    {/*
    <button onClick={()=>setShowCount(!showCount)}>toggle count</button>

    <button onClick={()=>setCount(count+1)}>Count it</button>

    {showCount?<p>{count}</p>:null}*/}
    <button onClick={()=>setGuitar({...guitar,model:'Telecaster'})}>Change model</button>
    
     <p>{guitar.brand}</p>
     <p>{guitar.model}</p>
   

    </header></div>
  );
}
export default App;