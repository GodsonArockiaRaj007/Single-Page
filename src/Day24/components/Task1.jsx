import { useReducer } from "react"

const initial=0;
const reduce=(state,action)=>{
    switch(action.type)
    {
        case"INC":
            return state+1
        case"DEC":
            return state-1
        case"RES":
            return initial
        default:
            return state
    }
}
const Task1 = () => {
    const [state,dispatch]=useReducer(reduce,initial)

  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>Increase</button>
    <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"RES"})}>Reset</button>
    </>
  )
}

export default Task1