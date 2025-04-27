
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Team: {team}</Card.Text>
                <Card.Text>Nationality: {nationality}</Card.Text>
                <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Player;
