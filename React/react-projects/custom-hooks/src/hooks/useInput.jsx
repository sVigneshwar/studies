import React, { useState } from 'react'

function useInput(initialState) {
    const [value, setValue] = useState(initialState)
    const [error, setError] = useState(null)
    const onChange = e => {
        const currentValue = e.target.value
        setValue(currentValue)

        //for name validation
        if(!(currentValue.length > 3)){
            setError("Field not valid")
        }else{
            setError(null)
        }
    }
    const reset = () => {
        setValue(initialState)
        setError(null)
    }
    return {value, onChange, reset, error}
}

export default useInput
