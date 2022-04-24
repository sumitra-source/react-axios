import React,{useState,useEffect,useRef} from 'react'

export default function App() {
  const [name,setName]=useState('')
  //const inputRef=useRef()
  const prevName=useRef('')
  useEffect(()=>{
    prevName.current=name
  },[name])

  {/* function focus(){
    inputRef.current.focus()

  }
} const renderCount=useRef(0)

  useEffect(()=>{
    renderCount.current=renderCount.current+1;
  })*/}
  return (<>
  <input value={name} onChange={e=>setName(e.target.value)}/>
    <div>My name is {name} and it used to be {prevName.current}</div>
   {/*} <div>I rendered{renderCount.current} times</div>
   <button onClick={focus}>Focus</button>*/}
    </>
  )
}
