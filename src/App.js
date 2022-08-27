
import './App.css';
import "./index.css";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <Profile
        dp="https://avatars.githubusercontent.com/u/44544798?s=400&u=7a960423c2c483811a0d19c7c1fcad7f6f0283e9&v=4"
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
      <Counter />
    </div>
  );

  function Counter() {
    const [like, setLike] = useState(0);
    const [disLike, setDislike] = useState(0);
    return (
      <div>
        <button onClick={() => setLike(like + 1)} > 👍 {like}</button>
        <button onClick={() => setDislike(disLike + 1)} > 👎 {disLike}</button>
      </div>
    );

  }
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
