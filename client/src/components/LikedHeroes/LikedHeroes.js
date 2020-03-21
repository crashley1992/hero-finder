import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const LikedCharacters = (props) => {
    return (
        <Card>
        <Card.Img variant="top" src={props.link} />
        <Card.Body>
            <Card.Title><strong>{props.name}</strong></Card.Title>
        </Card.Body>
</Card>
    )
}

export default LikedCharacters;