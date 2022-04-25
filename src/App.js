import React,{useState,useCallback} from 'react'
import List from './List'

export default function App() {
  const[number,setNumber]=useState(1)
  const [dark,setDark]=useState(false)
  const getItems=useCallback((incrementer)=>{
    return[number+incrementer,number
    +1+incrementer,number+2+incrementer]
  },[number])
  const theme={
    backgroundColor:dark?'#333':'#FFF',
    color:dark?'#FFF':'#333'
  }
  return (
    <div style={theme}>
    <input type="number"value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
    <button onClick={()=>setDark(prevDark=>!prevDark)}>
      ToggleTheme
    </button>
    <List getItems={getItems}/>
    </div>
  )
}
