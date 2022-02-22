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
  

  return (
  <div className="App">
  <h1>Iron Contacts</h1>
    <button onClick={() => RandomContact(contacts)}>Add Random Contact</button>

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
