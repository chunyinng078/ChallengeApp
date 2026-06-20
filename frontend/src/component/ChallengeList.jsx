import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; // 🌟 記得 Import Form
import axios from 'axios';

function ChallengeList({ challenges, onDataChange }) {

    const [editingId, setEditingId] = useState(null);
    const [editMonth, setEditMonth] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/challenges/${id}`);
            if (onDataChange) onDataChange();
        } catch (error) {
            console.error("Error deleting: ", error);
        }
    };

    const startEditing = (challenge) => {
        setEditingId(challenge.id);
        setEditMonth(challenge.month);
        setEditDescription(challenge.description);
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`/challenges/${id}`, {
                month: editMonth,
                description: editDescription
            });
            setEditingId(null);
            if (onDataChange) onDataChange();
        } catch (error) {
            console.error("Error updating: ", error);
        }
    };

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <ListGroup as="ol" numbered className="text-start">
            {challenges.map(challenge => (
                <ListGroup.Item key={challenge.id} as="li" className="d-flex justify-content-between align-items-start">
                    {editingId === challenge.id ? (
                        <div className="w-100 me-2">
                            <Form.Select
                                value={editMonth}
                                onChange={(e) => setEditMonth(e.target.value)}
                                size="sm"
                                className="mb-2"
                            >
                                <option value="">-- Please select month --</option>
                                {months.map(m => <option key={m} value={m}>{m}</option>)}
                            </Form.Select>

                            <Form.Control
                                as="textarea"
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                                size="sm"
                            />

                            <div className="mt-2">
                                <Button variant="success" size="sm" className="me-2" onClick={() => handleUpdate(challenge.id)}>Save</Button>
                                <Button variant="secondary" size="sm" onClick={() => setEditingId(null)}>Cancel</Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{challenge.month}</div>
                                {challenge.description}
                            </div>
                            <div>
                                <Button variant="warning" size="sm" className="me-2" onClick={() => startEditing(challenge)}>Edit</Button>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(challenge.id)}>X</Button>
                            </div>
                        </>
                    )}

                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default ChallengeList;