import { useState } from 'react';

export default function FeedbackForm() {
    const [value, setValue] = useState("");
    const [status, setStatus] = useState('typing');

    if(status == "sent"){
        return <h1>thanks for feedback</h1>
    }
    async function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        await sendData(value).then(res => res)
        setStatus("sent")
    }

    function sendData(value){
        return new Promise(resolve => setTimeout(() => {
            resolve(`Comments: ${value}. Thanks for your comments!`)
        }, 2000))
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea disabled={status == "submitting"} value={value} onChange={e => setValue(e.target.value)}></textarea>
            <br />
            <button disabled={status == "submitting"} type="submit">Submit</button>
        </form>
        </>
    )
}