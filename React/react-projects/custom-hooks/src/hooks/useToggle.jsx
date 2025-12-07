import React, { useState } from 'react'

function useToggle(initial = false) {
    const [type, setType] = useState(initial)

    const toggleFunction = () => {
        setType(initial => !initial)
    }

    return [type, toggleFunction]

}

export default useToggle
