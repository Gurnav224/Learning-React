import { useReducer } from "react"


const intialState  = {counter : 0}


function reducer(state, action){
  const { type} = action
  switch(type){
    case "Increment":
      return {...state,counter:state.counter +1 }
      case "Decrement":
        return {...state, counter:state.counter-1}
  }
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button
      onClick={()=>dispatch({type:"Increment"})}
      >Increment</button>
      <button
      onClick={()=>dispatch({type:"Decrement"})}
      >Decrement</button>
    </div>
  )
}

export default App
