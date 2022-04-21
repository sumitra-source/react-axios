import{useState}from 'react';
import './App.css';
function App(){
  const namesFromDatabase=[
    {id:1,username:'Sumitra Shrestha'},
    {id:2,username:'Nikita Rijal'},
    {id:3,username:'  Nabina Kusi'}
  ]
  const[names,setNames]=useState(namesFromDatabase)
  const filterNames=e=>{
    const search=e.target.value.toLowerCase()
    const filteredNames=namesFromDatabase.filter(names=>names.username.toLowerCase().includes(search))
    setNames(filteredNames)
  }
  return(
    <div className="App">
      <header className="App-header">
        <h2>Username</h2>
        <hr/>
        <input type='text'onChange={(e)=>filterNames(e)}/>
        <button>Search</button>
        <ul>
          {names.map(name=>{
            return<li key={name.id}>
              {name.username}</li>
          
          })}
        </ul>
      </header>
    </div>
  )
}
export default App