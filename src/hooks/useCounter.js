import { useState } from "react"

function useCounter(initValue){
    const [counter, setCounter]=useState(initValue)

    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
    return [

        counter,
        increment,
        decrement
    ]
}

export default useCounter