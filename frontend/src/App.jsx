import { useEffect, useState } from 'react'
import './App.css'
import ChallengeList from './component/ChallengeList'
import axios from 'axios';
import AddChallenge from './component/AddChallenge';

function App() {
  const [challenges, setChallenges] = useState([]);

  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching challenges: ", error);
    }

  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleChallengeAdded = () => {
    fetchChallenges();
  };

  return (
    <>
      <div className="App">
        <h1>Monthly Challenges</h1>
        <AddChallenge onChallengeAdded={handleChallengeAdded} />
        <ChallengeList challenges={challenges} />
      </div>
    </>
  )
}

export default App
