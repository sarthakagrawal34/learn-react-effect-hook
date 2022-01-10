import './App.css';
import React, {useState, useEffect} from 'react';

function App(props) {
  const [userId, setUserId] = useState('1'); 
  const [data, setData] =  useState([]);

  useEffect (() => {
    // url for fetching the data as json object
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    // fetching the data
    // componentDidMount
    fetch(url)
      .then ((response) => response.json()) // fetch returns a promise which we transform response in json format
      .then((data) => {
        console.log('DATA', data);
        // setData (data) cannot be called without passing a argument to useEffect as it will run till infinite as it is re-rendered every time when there is change in state 
        // componentDidUpdate
        setData(data); 
      });
  // }, [] ); if we want useEffect to run single time in initiation
  },[userId] ); // Now it will only re-render when the userId is changed

  // Using useEffect as a side-effect to learn about cleanup
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    // Provide a cleanup to remove the event listener after the data is fetched like componentWillUnmount
    return ( () => {
      document.removeEventListener('mousemove', onMouseMove);
    })
  });

  function onMouseMove(event) {
    console.log(event.clientX);
  }

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
