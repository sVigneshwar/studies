import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
    const [myList, setmyList] = useState(initialList)
    const [myList2, setmyList2] = useState(initialList)

    function handlemyListToggle(id, checkedStatus){

        setmyList(myList.map(val=>{
            if(val.id === id){
                return {...val, seen: checkedStatus}
            }else{
                return val;
            }
        }))
    }

    function handlemyList2Toggle(id, checkedStatus){
        setmyList2(myList2.map(val=>{
            if(val.id === id){
                return {...val, seen: checkedStatus}
            }else{
                return val;
            }
        }))
    }


    return(
        <>
            <h2>My List 1</h2>
            <ItemList array={myList} onToggle={handlemyListToggle} />
            <h2>My List 2</h2>
            <ItemList array={myList2} onToggle={handlemyList2Toggle} />
        </>
    )
}

function ItemList({ array, onToggle }) {
  return (
   <ul>
    {array.map(val =>{
        return (
            <li key={val.id}>
                <label>
                <input type="checkbox" checked={val.seen} onChange={e=>onToggle(val.id, e.target.checked)} />
                {val.title}
                </label>
            </li>
        )
    })}
   </ul>
  )
}
