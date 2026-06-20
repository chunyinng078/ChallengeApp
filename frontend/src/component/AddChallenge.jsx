import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddChallenge({ onChallengeAdded }) {

    const [month, setMonth] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/challenges`, { month, description });
            setMonth('');
            setDescription('');
            onChallengeAdded();
        } catch (error) {
            console.error("Error adding challenge: ", error);

        }
    };
    return (
        <>
            <Card className="mt-5">
                <Card.Header>Add New Challenge</Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <h6 htmlFor="month" className="text-start">Month:</h6>
                            <Form.Select
                                aria-label="Select month"
                                id="month"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                required
                            >
                                <option value="">-- Please select a month --</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </Form.Select>
                        </div>
                        <br />
                        <div>
                            <InputGroup >
                                <InputGroup.Text>Description</InputGroup.Text>
                                <Form.Control placeholder="Describe challenge" required as="textarea" aria-label="With textarea" type="text" id="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                            </InputGroup>
                        </div>
                        <br/>
                        <Button variant="primary" type="submit">Challenge!</Button>

                    </form>
                </Card.Body>
            </Card>


        </>
    )
}

export default AddChallenge;