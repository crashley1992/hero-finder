import React, { Component } from 'react';
import axios from 'axios';
import LikedHeroes from '../components/LikedHeroes/LikedHeroes';
import NoHeroes from '../components/NoHeroes/NoHeroes';
import ResultsModal from '../components/ResultsModal/ResultsModal';
import GoogleResults from '../components/GoogleResults/GoogleResults';
import ComicBook from '../components/ComicBook/ComicBook';
class SavedHeroes extends Component {
    state = {
        heroes: [],
        showComponent: false,
        id: '',
        nameSearch: '',
        nameSearchUpdate: false,
    }
    /***********************************************
     *Logic is for making liked heroes display and handling deletions
     **********************************************/

// This Loads what is currently in Mongo when the page first loads
    componentDidMount() {
       this.handleSavedHeroes();
    }
//adds hero's data to state that was saved in the database
    handleSavedHeroes = () => {
        axios.get('/api/savedhero')
        .then(response => {
            this.setState({ heroes: response.data })
            console.log(this.state.heroes)
        }).catch((err) => {
            console.log(err);
        })
    }
//when the delete button is clicked the id is sent to delete route in express and removed from mongo.
    handleDelete = (event) => {
        const deleteID = event;
        console.log(deleteID + ' button clicked')
        this.setState({
            id: deleteID
        })
    }
//when the state changes after a hero is removed, the page reloads the handleSavedHeroes to update the displayed info
    componentDidUpdate() {
        if( this.state.id !== '' ) {
            console.log(this.state.id +  " id for deleting was submitted")
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
      }).catch((err) => {
          console.log(err)
      }) 
        }
    }

    /************************************************************************* 
     * Following functions will be logic for the comic search using google API
     * results display in a modal 
    *************************************************************************/
    //makes modal appear/ gives target value for axios
    handleModal = (event) => {
        const doesShow = this.state.showComponent;
        this.setState({ showComponent: !doesShow })
        console.log(event.target.value + " value test")
        this.setState({
            nameSearch: event.target.value,
            nameSearchUpdate: true
        })
    }

    //closes modal
    handleClose = () => {
        const doesShow = this.state.showComponent;
        this.setState({ showComponent: !doesShow })
        console.log(this.state.showComponent + " close")
    }


    render() {
        return(
            <div className="hero-section">
                <h1 style={{textAlign: 'center', color: 'white'}}>Heroes</h1>
                {this.state.heroes.length === 0 ? 
                <NoHeroes /> :
                this.state.heroes.map(hero => (
                    <LikedHeroes 
                    key={hero._id}
                    id={hero._id}
                    name={hero.name}
                    link={hero.link}
                    handleDelete={this.handleDelete}
                    handleModal={this.handleModal}
                    handleNameInput={this.handleNameInput}
                    /> 
                ))}
                {/* Handler that closes modal */}
                {this.state.showComponent === true ? 
                <ResultsModal 
                    handleClose={this.handleClose}
                /> : null}
                {/* Passes hero name to Google Results */}
                {this.state.nameSearch === '' ? null : 
                <GoogleResults 
                    nameSearch={this.state.nameSearch}
                    handleModal={this.handleModal}
                />}
            </div>
        )
    }
}

export default SavedHeroes;