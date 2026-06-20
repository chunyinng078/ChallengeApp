import { useEffect, useState } from 'react'
import './App.css'
import ChallengeList from './component/ChallengeList'
import axios from 'axios';

function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
      console.log(response);
    };
    fetchChallenges();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Monthly Challenge</h1>
        <ChallengeList challenges={challenges} />
      </div>
    </>
  )
}

export default App
