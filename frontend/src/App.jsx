import { useEffect, useState } from 'react'
import ChallengeList from './component/ChallengeList'
import axios from 'axios';
import AddChallenge from './component/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
  const [challenges, setChallenges] = useState([]);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');

  const [filterMonth, setFilterMonth] = useState('All');

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

  const filteredChallenges = filterMonth === 'All'
    ? challenges
    : challenges.filter(challenge => challenge.month === filterMonth);

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

        <Row className="mb-3">
          <Col md={4} sm={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Filter by Month:</Form.Label>
              <Form.Select
                value={filterMonth}
                onChange={(e) => setFilterMonth(e.target.value)}
                className="shadow-sm"
              >
                <option value="All">All Months</option>
                {months.map(m => <option key={m} value={m}>{m}</option>)}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <ChallengeList
          challenges={filteredChallenges}
          onDataChange={fetchChallenges}
          onActionSuccess={showMessage}
        />
      </Container>
    </>
  )
}

export default App;