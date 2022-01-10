import './App.css';
import React, {useState, useEffect} from 'react';

function App(props) {
  const [userId, setUserId] = useState('1'); 
  const [data, setData] =  useState([]);

  useEffect (() => {
    // url for fetching the data as json object
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    // fetching the data
    fetch(url)
      .then ((response) => response.json()) // fetch returns a promise which we transform response in json format
      .then((data) => {
        console.log('DATA', data);
        // setData(data);
      });
  });

  return (
    <div className='App' style= {{ paddingLeft: 20}}>
      <h1>App</h1>
      <button onClick={ () => setUserId('2')}>Change user id to 2 </button>
      {data.map((user) => (
        <div>
          <p> {user.title} </p>
        </div>
      ))}
    </div>
  );
}
export default App;
