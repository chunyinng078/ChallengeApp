import { useEffect, useState } from 'react'
import ChallengeList from './component/ChallengeList'
import axios from 'axios';
import AddChallenge from './component/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


function App() {
  const [challenges, setChallenges] = useState([]);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');

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

  const showMessage = (msg, type = 'success') => {
    setMessage(msg);
    setVariant(type);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleChallengeAdded = () => {
    fetchChallenges();
    showMessage("Challenge created successfully!", "success");
  };

  return (
    <>
      <Container className="mt-5">
        <h1>Monthly Challenges</h1>

        {message && (
          <Alert variant={variant} onClose={() => setMessage('')} dismissible>
            {message}
          </Alert>
        )}

        <AddChallenge onChallengeAdded={handleChallengeAdded} />
        <br />
        <ChallengeList
          challenges={challenges}
          onDataChange={fetchChallenges}
          onActionSuccess={showMessage}
        />
      </Container>
    </>
  )
}

export default App;