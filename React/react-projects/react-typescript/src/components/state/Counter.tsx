import { useReducer } from "react"

type CounterType = {
    count: number
}

type CounterUpdates = {
    type: 'decrement' | 'increment'
    payload: number
}

type CounterReset = {
    type: 'reset'
}

type CounterActionType = CounterUpdates | CounterReset

let initialValue = {
    count: 0
}

function reducer(state:CounterType, action:CounterActionType){

    switch(action.type){
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - action.payload}
        case 'reset':
            return initialValue
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
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}
