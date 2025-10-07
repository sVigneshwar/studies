import React, { useState } from 'react'
import useLocalStorage from './uselocalstorage';
import useUpdateLogger from './useupdateloggder';

export default function Customhook() {
    const [name, setName] = useLocalStorage("name", "");

    useUpdateLogger(name)

    return (
        <>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </>
    )
  
}
