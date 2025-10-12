import React, { useState, useMemo, useCallback, useEffect } from "react";

export default function AdvancedReactTopics4() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const users = [
    "Vignesh",
    "Maverick",
    "Kumar",
    "Sathish",
    "Arun",
    "Vikram",
    "Ravi",
    "Surya",
    "Dinesh",
  ];  

  const filteredUsers = useMemo(()=>{
    console.log("memo used")
    return users.filter(val=>{
      return val.toLowerCase().includes(search.toLowerCase())
    })
  },[search])

  const selectUser = useCallback(val=>{
    console.log("callback used");
    alert("you selected " + val);
  }, [])

  return (
    <div>
      <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />

      <UserList users={filteredUsers} selectUser={selectUser} />
    </div>
  );
}

function UserList({users, selectUser}) {
  
  useEffect(() => {
    console.log("UserList rendered or dependencies changed");
  }, [users, selectUser]);

  return (
    <>
    <ul>
      {users.map(val=>{
        return <li key={val} onClick={() => selectUser(val)}>{val}</li>
      })}
    </ul>
    </>
  )
}
