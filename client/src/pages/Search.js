import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// Components
import HeroResults from '../components/HeroResults/HeroResults';
import './styles/search-page.css';
import RandomResults from '../components/RandomResults/RandomResults';
class Search extends Component {
    //nameInput is for the search results
    //heroes is where the data will be stored from the API results
    state = {
        nameInput: '',
        heroes: [],
        dataLoaded: false,
        //Section for random results
        randomResult: {}
      }
    
         // function gets the name input from search form
         nameInputUpdate = (name) => {
          this.setState({nameInput: name},
              () => {
                console.log( this.state.nameInput + " app.js name input")
              }
            )
        }

        //Allows users to submit a form with enter, prevents form from clearing
        onFormSubmit = e => {
            e.preventDefault();
            const { nameInput } = this.state;
          }

          //function to find a random hero.
          randomHero = () => {
            axios.get('/random/comic-json')
            .then( (response)  => {
              // console.log(response.data)
              // console.log(response.data.id)
              // console.log(response.data.name)
              // console.log(response.data.biography.aliases)
              // console.log(response.data.publisher)
              // console.log(response.data.work.base)
              // console.log(response.data.connections)
              // console.log(response.data.image.url)
              this.setState({
                randomResult: response.data,
                dataLoaded: true
              })
              console.log(this.state.randomResult)
            })
            .catch( (error) => {
              console.log(error);
            });
         } 

         dataHandler = () => {
           if (Object.keys(this.state.heroes).length >= 1) {
            this.setState({
              dataLoaded: true
            })
            console.log(" kasd")
           }
         }
 
        //function sends the nameInput to the backend so the API call can be made
        nameSubmit = () => {
            const nameInput = this.state.nameInput
            axios({
              method: 'POST', 
              contentType: "application/json",
              crossDomain: true,
              url: '/api/comic-json',
              data: { 
                nameInput: nameInput
              },
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS'
              }
            }, console.log(typeof nameInput))
            .then( (response) => {
              console.log(JSON.stringify(response.data))
               this.setState({ 
                 heroes: response.data, 
                 dataLoaded: true
                }) 
            }).catch( (err) => {
              console.log(err.response)
            }) 
          }

   render() {
    //Search form below updates search results by changing the nameInput state. nameInput is submitted via the nameSubmit function to the /api/comic-json route made in the backend via Node.js
       return(
          <div style={{color: 'white'}}>
                 <Form inline className="search-form" onSubmit={this.onFormSubmit}>
                     <FormControl type="text" placeholder="Search For Hero" 
                   //takes user input and updates the state
                     value={this.state.nameInput} onChange={(event) => this.setState({nameInput: event.target.value})}
                     />
                    {/* Name input button */}
                     <Button variant="btn btn-success"
                      onClick={this.nameSubmit}
                      type="submit"
                      >Search</Button>
                      {/* Random Hero button */}
                      <Button variant="btn 
                      btn-info"
                      onClick={this.randomHero}
                      >Random</Button>
                   </Form>
                   {/*Waiting for hero info to load*/}
                   {this.state.dataLoaded ? this.state.heroes.map( hero => (
                    <HeroResults 
                        key={hero.id}
                        id={hero.id}
                        name={hero.name}
                        image={hero.image.url}
                        alias={hero.biography.aliases}
                        base={hero.work.base}
                    /> 
                    )) : null}
                    {this.state.dataLoaded ? 
                    <RandomResults 
                      key={this.state.randomResult.id}
                      name={this.state.randomResult.name}
                      image={this.state.randomResult.image.url}
                      alias={this.state.randomResult.biography.aliases}
                      /> : null}
          </div>
       )
   }
}

export default Search;