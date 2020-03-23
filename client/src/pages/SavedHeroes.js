import React, { Component } from 'react';
import axios from 'axios';
import LikedHeroes from '../components/LikedHeroes/LikedHeroes';
import NoHeroes from '../components/NoHeroes/NoHeroes';
class SavedHeroes extends Component {
    state = {
        heroes: [],
        showComponent: null,
        id: ''
    }

    componentDidMount() {
       this.handleSavedHeroes();
    }

    handleSavedHeroes = () => {
        axios.get('/api/savedhero')
        .then(response => {
            this.setState({ heroes: response.data })
            console.log(this.state.heroes)
        }).catch((err) => {
            console.log(err);
        })
    }

    handleDelete = (event) => {
        const deleteID = event;
        console.log(deleteID + ' button clicked')
        this.setState({
            id: deleteID
        })
    }

    componentDidUpdate() {
      console.log(this.state.id +  " was submitted")
      axios({
        method: 'PUT', 
        contentType: "application/json",
        crossDomain: true,
        url: '/api/savedhero/'+this.state.id,
        data: { 
          _id: this.state.id
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS'
        }
      }).then((res) => {
          this.handleSavedHeroes()
      }) 
    }

    render() {
        return(
            <div className="hero-section">
                <h1 style={{textAlign: 'center', color: 'white'}}>Heroes</h1>
                {this.state.heroes.map(hero => (
                    <LikedHeroes 
                    key={hero._id}
                    id={hero._id}
                    name={hero.name}
                    link={hero.link}
                    handleDelete={this.handleDelete}
                    /> 
                ))}
            </div>
        )
    }
}

export default SavedHeroes;