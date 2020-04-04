import React from 'react';
import Card from 'react-bootstrap/Card';

const ComicBook = (props) => {
    return(
        <Card>
        <Card.Img variant="top" src={props.image}  alt={props.title}/>
        <Card.Body>
            <Card.Title><strong>{props.title}</strong></Card.Title>
            <Card.Text>Summary: {props.description}</Card.Text>
            <Card.Text>Publisher: {props.publisher}</Card.Text>
            <Card.Text>Date Published: {props.publishedDate}</Card.Text>
            <Card.Text>Author(s): {props.authors}</Card.Text>
        </Card.Body>
</Card>
    )
}

export default ComicBook;