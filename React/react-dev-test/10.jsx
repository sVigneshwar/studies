import { useState } from 'react';

export default function Accordion() {

    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <>
            <Panel title="test1" desc="Desc 1" isActive={activeIndex === 0} toggle={() => setActiveIndex(0)} />
            <Panel title="test2" desc="Desc 2" isActive={activeIndex === 1} toggle={() => setActiveIndex(1)} />        
        </>
    )
  
}

function Panel({title, desc, isActive, toggle}) {1

    return (
        <>
            <h1>{title}</h1>
            {isActive?<p>{desc}</p>:<button onClick={toggle}>Show</button>}           
        </>
    )
}
