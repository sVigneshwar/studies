import { useState } from 'react';
export default function MovingDot(){
    const [pos, setPos] = useState({x: 0, y: 0})

    return(
        <>
         <div
            onPointerMove = {e => {
                setPos({
                    x: e.clientX,
                    y: e.clientY
                })
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
            </div>
        </>
    )
}