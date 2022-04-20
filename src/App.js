import React,{useState} from 'react';
import './App.css';
function App() {
  const [formInputs,setFormInputs]=useState({
    username:'',
    password:''
  })
  const inputChangedHandler = e=>{
    const updatedInputs={
      ...formInputs,
      //[key]:value
      [e.target.id]:e.target.value
    }
    setFormInputs(updatedInputs);
  }
  const submitHandler = e=>{
    e.preventDefault();
  alert(`${formInputs.username} and ${formInputs.password}`)

  }
  return (
    <div className='App'>
      <form autoComplete='off'onSubmit={submitHandler}>
        <h1>TechCheck</h1>
        <label htmlFor='username'>Username</label>
        <input type='text'id='username' onChange={inputChangedHandler}/>
           <label htmlFor='password'>Password</label>
        <input type='password'id='password' onChange={inputChangedHandler}/>
        <div className='Buttons'>
          <button type='button'>Cancel</button>
                    <button type='submit'>Submit</button>
        </div>
       
      </form>
    </div>
  );
}

export default App