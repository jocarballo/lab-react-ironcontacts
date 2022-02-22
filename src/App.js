import "./App.css";
import contacts from "./contacts.json";


function App() {


  let contacts = [ 
    {
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Anthony Hopkins",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/jdoBTIru71FbPuHGEgox5RVmIO0.jpg",
      "popularity": 10.273801,
      "id": "f197b07c-c0f6-4837-a4d6-f98f8673b0e6",
      "wonOscar": true,
      "wonEmmy": true
    },
    {
      "name": "Monica Bellucci",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      "popularity": 16.096436,
      "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Gal Gadot",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
      "popularity": 10.049256,
      "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Matt Damon",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/elSlNgV8xVifsbHpFsqrPGxJToZ.jpg",
      "popularity": 9.500475,
      "id": "fd998a8f-1c9f-4ad8-8a03-45f93b630aa1",
      "wonOscar": true,
      "wonEmmy": false
    }
  ]

  return (
  <div className="App">
    <div className="contactsTable">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((val, key) => {
          return (
            <tr key={key}>
              <td><img className="contact-image" src={val.pictureUrl} alt="image"/></td>
              <td>{val.name}</td>
              <td>{val.popularity}</td>
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
