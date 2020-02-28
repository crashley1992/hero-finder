import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import "./hero-result.css"
import { FaHeart } from 'react-icons/fa';

class HeroResults extends Component {

    state = {
        liked: true
    }

    handleLiked = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
            // Maps alias info from JSON array to ul
    const aliasList = this.props.alias.map((alias) =>
    <li key={alias.toString()}>
        {alias}
    </li>
    )
    let like = this.state.liked ? <FaHeart style={{color: 'white'}}/> : <FaHeart style={{color: 'red'}}/>

    return(
        <div>
    <Card>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
            <Card.Title><strong>{this.props.name}</strong></Card.Title>
            <h6><strong>Hero Alias:</strong></h6>
            <ul>
               {aliasList}
            </ul>
            <p><strong>Hero Base:</strong> {this.props.base}</p>
            <button className="btn btn-secondary" onClick={this.handleLiked}>{like}</button>
        </Card.Body>
</Card>
        </div>
    )
  }
}
export default HeroResults;