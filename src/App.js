import logo from './logo.svg';
import './App.css';
import "./index.css";

function App() {
  return (
    <div className="App">
       <Profile
        dp="https://avatars.githubusercontent.com/u/44544798?v=4"
        name="Ajithkumar"
      />

      <Profile
        dp="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUncw5PB5syw9BIoymTrwyOjAqRlTZC1Rkew&usqp=CAU"
        name="Shiva"
      />

      <Profile
        dp="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
        name="Akshay"
      />
  
    </div>
  );
}

function Profile({ dp, name }) {
  return (
    <div className="container">
      <img src={dp} alt="img not found!" />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
