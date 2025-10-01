// City quiz
// In which city is there a billboard that turns air into drinkable water?

// test

// Submit
// Good guess but a wrong answer. Try again!

//correct answer

import { useState } from 'react';
export default function Form(){

    const [input, setInput] = useState("")
    const [answer, setAnswer] = useState(false)
    const [error, setError] = useState("")
    const [status, setStatus] = useState("typing")
    
    if(answer == true){
        return(<h1>Correct answer</h1>)
    }

    function handleChange(e){
       return setInput(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(input == "lima"){
                    resolve(setAnswer(true))
                }else{
                    // reject("Wrong Answer")
                    setError("Wrong Answer")
                }
                setInput("")
                setStatus("typing")
            }, 2000)
        })
    }

    return(
        <>
            <h1>City quiz</h1>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} value={input} disabled={status === "submitting"}></textarea>
                <br />
                <button type="submit" disabled={status === "submitting"}>Submit</button>
            </form>
            {error !== "" ? <p>{error}</p> : ""}
        </>
    )
}