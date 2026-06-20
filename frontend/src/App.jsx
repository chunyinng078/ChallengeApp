import { useEffect, useState } from 'react'
import ChallengeList from './component/ChallengeList'
import axios from 'axios';
import AddChallenge from './component/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
      <Container className="mt-5">
        <h1>Monthly Challenges</h1>
        <AddChallenge onChallengeAdded={handleChallengeAdded} />
        <br/>
        <ChallengeList challenges={challenges} onDataChange={fetchChallenges}/>
      </Container>
    </>
  )
}

export default App
