import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    var updatedArray = shapes.map(val => {
        if(val.type === "square"){
          return val;
        }else{
          return (
            {...val, y: val.y+50}
          )
        }
    })
    setShapes(updatedArray)
  }

  return (
    <>
      <button onClick={handleClick}>Click to move</button>
      {shapes.map(val => {
        return <div
             key={val.id}
            style={{
                height: 20,
                width: 20,
                backgroundColor: "red",
                borderRadius:
            val.type === 'circle'
              ? '50%' : '',
                top: val.y,
                left: val.x,
                position: "absolute"
            }}
        >
        </div>
      })}
    </>
  );
}
