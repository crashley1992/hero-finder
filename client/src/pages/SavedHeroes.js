import React, { Component } from 'react';
import axios from 'axios';
import LikedHeroes from '../components/LikedHeroes/LikedHeroes';
import NoHeroes from '../components/NoHeroes/NoHeroes';
class SavedHeroes extends Component {
    state = {
        heroes: [],
        groups: [],
        showComponent: null,
        id: ''
    }

    componentDidMount() {
        axios.get('/api/savedhero')
            .then(response => {
                this.setState({ heroes: response.data })
                console.log(this.state.heroes)
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return(
            <div className="hero-section">
                <h1 style={{textAlign: 'center', color: 'white'}}>Heroes</h1>
                {this.state.heroes.map(hero => (
                    <LikedHeroes 
                    key={hero._id}
                    name={hero.name}
                    link={hero.link}
                    /> 
                )) } : <NoHeroes />
            </div>
        )
    }
}

export default SavedHeroes;