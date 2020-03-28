import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const LikedCharacters = (props) => {
    return (
        <Card>
        <Card.Img variant="top" src={props.link} />
        <Card.Body>
            <Card.Title><strong>{props.name}</strong></Card.Title>
            {/* DELETE BUTTON */}
            <button className="btn btn-danger" id={props.id} onClick={(event) => {
                props.handleDelete(event.target.id)
            }}>Remove</button>
            {/* FIND COMIC BUTTON */}
            <button className='btn btn-success' onClick={props.handleModal}>Find Comics</button>
        </Card.Body>
</Card>
    )
}

export default LikedCharacters;