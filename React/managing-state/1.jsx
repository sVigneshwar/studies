// -------------------------------------------------------------------------------------------------
let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = 'Save Profile';
    // TODO: show inputs, hide content
  } else {
    editButton.textContent = 'Edit Profile';
    // TODO: hide inputs, show content
  }
  // TODO: update text labels
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

editButton.onClick(function(){
  isEditing = !isEditing;
})

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;


// -------------------------------------------------------------------------------------------------
import { useState } from 'react';
export default function EditProfile() {
    const [firstname, setFirstname] = useState("Jane")
    const [secondname, setSecondname] = useState("Jacobs")
    const [mode, setMode] = useState("normal")

    var fullName = firstname +" "+ secondname;

  return (
    <form>
      <label>
        First name:{' '}
        {mode == "normal" ? <b>{firstname}</b> : <input value={firstname} onChange={e => setFirstname(e.target.value)} />}        
      </label>
      <label>
        Last name:{' '}
        {mode == "normal" ? <b>{secondname}</b> : <input value={secondname} onChange={e => setSecondname(e.target.value)} />}                
      </label>
      <button type="submit" onClick={(e) => {
        e.preventDefault();
        mode == "normal" ? setMode("edit") : setMode("normal");
      }}>
        
        {mode == "normal" ? "Edit Profile" : "Save Profile"}                
      </button>
      <p><i>Hello, {fullName}!</i></p>
    </form>
  );
}



// -------------------------------------------------------------------------------------------------


import { useState } from 'react';
export default function Picture() {
  const [active, setActive] = useState(false)

  var bgClass = active == false?"background background--active":"background"
  
  var imgClass = active == true?"picture picture--active":"picture"
  
  return (
    <div className={bgClass}>
      <img
        className={imgClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setActive(!active)}
      />
    </div>
  );
}


