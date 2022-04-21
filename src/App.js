import React,{useReducer} from 'react';
import * as actionTypes from './actions';
import './App.css';

const initialState={
  loading:false,
  error:null,
  quote:''
}
const reducer=(state,action)=>{
  switch(action.type){
    case actionTypes.ON_FETCH_START:
      return{
        ...state,
        loading:true ,
        quote:''

      }
      case actionTypes.ON_FETCH_FAIL:
        return{
          ...state,
          loading:false,
          error:'I swear this usually never happens',
          quote:''
        }
        case actionTypes.ON_FETCH_SUCCESS:
          return{
            ...state,
            loading:false,
            error:null,
            quote:action.quote
          }
          default:return state
        }
  }

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  const fetchQuote=()=>{
    dispatch({type:actionTypes.ON_FETCH_START});
    setTimeout(()=>{
    fetch('https://api.quotable.io/random')
    .then(response=>response.json())
    .then(data=>dispatch({type:actionTypes.ON_FETCH_SUCCESS,quote:data.content}))
    .catch(error=>dispatch({type:actionTypes.ON_FETCH_FAIL}));},1000);
  }
  return (
    <div className='App'>
    <header classNamed="App-header">
      <button onClick={fetchQuote}>Fetch Quote</button>
      <section>
      {state.loading?<p>loading...</p>:null}
        {state.error?<p>{state.error}</p>:null}
        {state.quote?<p>"{state.quote}"</p>:null}
      </section>  
    </header>
    </div>
  );
}

export default App