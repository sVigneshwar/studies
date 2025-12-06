import React, { useState } from 'react'

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(initialValue)

    const updatedValue = val => {
        setValue(val)
        localStorage.setItem(key, val)
    }

    return [value, updatedValue]
}

export default useLocalStorage
