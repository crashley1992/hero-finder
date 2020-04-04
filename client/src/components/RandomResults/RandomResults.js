import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

class RandomResults extends Component {

    state = {
        liked: true
    }

    handleLiked = () => {
        this.setState({
            liked: !this.state.liked
        })
        const data = {
            'name': this.props.name,
            'link': this.props.image,
            'id': this.props.id
        }
        //sending liked hero info to /api/savedhero so MongoDB can save it
        axios({
            method: 'POST', 
            contentType: "application/json",
            crossDomain: true,
            url: '/api/savedhero',
            data: data,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS'
            }   
        }, console.log(" ********user liked"))
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
            <button className="btn btn-secondary" onClick={this.handleLiked, this.props.handleGoogleData}>{like}</button>
        </Card.Body>
</Card>
        </div>
    )
  }
}

export default RandomResults;