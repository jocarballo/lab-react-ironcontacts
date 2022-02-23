import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';


function App() {

  let [contactsList, setContactsList] = useState(contacts.splice(0, 10))

  function RandomContact(celebrities) {
    let random = celebrities[Math.floor(Math.random()*celebrities.length)];

    const newArray = [...contactsList]
    newArray.push(random)

    setContactsList(newArray);
  }
  
  //let sortByName = () => {
    //return contact1.name - contact2.name
  //};

  
  let sortByName = contactsList.sort( (a, b) => a.localeCompare(b, 'fr'))

  let sortByPopularity = contactsList.sort( (a, b) => a.localeCompare(b, 'fr'))
  
  //let sortByPopularity = () => {
    //return contact2.popularity - contact1.popularity
  //};


  console.log("Contacts",)

  return (
  <div className="App">
  <h1>Iron Contacts</h1>
    <button onClick={() => RandomContact(contacts)}>Add Random Contact</button>
    <button onClick={() => contactsList(sortByName)}>Sort by Name</button>
    <button onClick={() => contactsList(sortByPopularity)}>Sort by Popularity</button>

    <div className="contactsTable">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contactsList.map((val, key) => {
          return (
            <tr key={key}>
              <td><img className="contact-image" src={val.pictureUrl} alt="image"/></td>
              <td>{val.name}</td>
              <td>{(val.popularity).toFixed(2)}</td>
              <td>{val.wonOscar ? "🏆" : ''}</td>
              <td>{val.wonEmmy ? "🏆" : ''}</td>
            </tr>
          )
        })}
      </table>
    </div>
  </div>
  )
}
export default App;
