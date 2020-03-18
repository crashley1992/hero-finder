import React, { Component } from 'react';
import axios from 'axios';

class SavedHeroes extends Component {
    state = {
        heroes: [],
        groups: [],
        showComponent: null,
        id: ''
    }

    componentDidMount() {
        axios.get('/api/savedhero'+this.props.id)
            .then(response => {
                this.setState({ heroes: response.data })
                // console.log(this.state.heroes)
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return(
            <div>
                <h1>{this.state.heroes}</h1>
            </div>
        )
    }
}

export default SavedHeroes;