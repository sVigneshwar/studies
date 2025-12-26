import { useReducer } from "react"

type CounterType = {
    count: number
}

type CounterActionType = {
    type: string
    payload: number
}

let initialValue = {
    count: 0
}

function reducer(state:CounterType, action:CounterActionType){

    switch(action.type){
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - action.payload}
        default:
            return state
    }
}

export default function Counter() {

    const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({type:'decrement', payload: 10})}>Decrement</button>
      <button onClick={() => dispatch({type:'increment', payload: 10})}>Increment</button>
    </div>
  )
}
