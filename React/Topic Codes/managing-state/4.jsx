import { useState } from 'react';

export default function Accordion() {
    var [item, setItem] = useState(0)

    function handleChange(i){
        setItem(i)
    }

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <List index={0} current={item} onUpdate={handleChange} title="about" desc="With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city." />
      <List index={1} current={item} onUpdate={handleChange} title="about" desc='The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.' />
      <List index={2} current={item} onUpdate={handleChange} title="test" desc='test' />
    </>
  );
}

export function List({title, desc, index, current, onUpdate}){
    return(
        <>
            <h3>{title}</h3>
            {current === index
                ?<p>{desc}</p>
                :<button onClick={() => onUpdate(index)}>Show</button>
            }
        </>
    )
}