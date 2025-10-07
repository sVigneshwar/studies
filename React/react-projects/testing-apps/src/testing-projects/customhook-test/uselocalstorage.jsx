import React, { useEffect, useState } from 'react'

function getLocalStorage(key, initialValue){
    var savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue){
        return savedValue
    }else{
        return initialValue
    }
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(()=>getLocalStorage(key, initialValue))
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
  return [value, setValue]
}
