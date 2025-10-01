import { useState } from 'react';
export default function Form(){
    const [text, setText] = useState("")
    return (
        <>
        <Inputbox value={text} updateText={setText} />
        <Paragraph text={text} />
        </>
    )
}

function Inputbox({value, updateText}){
    return (
        <>
        <input type="text" value={value} onChange={function(e) {
            return updateText(e.target.value)
        }} />
        </>
    )
}

function Paragraph({text}){
    return (
        <>
        <p>{text}</p>
        </>
    )
}