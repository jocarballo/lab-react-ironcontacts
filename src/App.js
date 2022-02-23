import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';


function App() {

  let [contactsList, setContactsList] = useState(contacts.splice(0, 5))

  function RandomContact(celebrities) {
    let random = celebrities[Math.floor(Math.random()*celebrities.length)];

    const newArray = [...contactsList]
    newArray.push(random)

    setContactsList(newArray);
  }
  
 
  const sortByName = () => {
    const sortedContacts = contactsList.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactsList([...sortedContacts]);
  };
  

  const sortByPopularity = () => {
    const sortedContacts = contactsList.slice().sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactsList([...sortedContacts]);
  };

 
  const deleteContact = (id) => {
    const updatedContacts = contactsList.filter(contact => {
      return contact.id !== id 
    });
    console.log("updated Contacts: ", updatedContacts)
    setContactsList([...updatedContacts])
  }


  console.log("Contacts",)

  return (
  <div className="App">
  <h1>Iron Contacts</h1>
    <button onClick={() => RandomContact(contacts)}>Add Random Contact</button>
    <button onClick={sortByName}>Sort by Name</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
  


    <div className="contactsTable">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>

        </tr>
        {contactsList.map((val, key) => {
          return (
            <tr key={key}>
              <td><img className="contact-image" src={val.pictureUrl} alt="image"/></td>
              <td>{val.name}</td>
              <td>{(val.popularity).toFixed(2)}</td>
              <td>{val.wonOscar ? "🏆" : ''}</td>
              <td>{val.wonEmmy ? "🏆" : ''}</td>
              <td><button onClick={() => deleteContact(val.id)}>Delete</button></td>
            </tr>
          )
        })}
      </table>
    </div>
  </div>
  )
}
export default App;
