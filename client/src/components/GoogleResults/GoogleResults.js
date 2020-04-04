import React, { Component } from 'react';
import axios from 'axios';
import ComicBook from '../ComicBook/ComicBook';
import NoHeroes from '../NoHeroes/NoHeroes';


class GoogleResults extends Component {
    state ={
        comicBooks: [],
        googleDataLoaded: false,
        nameSearch: this.props.nameSearch
    }

        componentDidMount() {
            console.log(this.state.nameSearch + " state")
            console.log(this.props.nameSearch + " props")
            if (this.state.nameSearch !== undefined) {
                console.log(this.state.nameSearch + " has updated")
                this.handleGoogleData()
            }
        }

        handleGoogleData = () => {
                let nameSearch = this.state.nameSearch;
                axios({
                    method: 'POST', 
                    contentType: "application/json",
                    crossDomain: true,
                    url: '/api/googlebooks',
                    data: { 
                        nameSearch: nameSearch
                    },
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS'
                    }
                }).then((response) => {
                    console.log(response.data.items)
                    let results = response.data.items;
                    console.log(results.toString())
                    this.setState({comicBooks: results})
                    console.log(this.state.comicBooks[0].volumeInfo.authors + " test")
                    console.log(this.state.comicBooks[0].volumeInfo.title + " test")
                }).catch((err) => {
                    console.log(err);
                })
        }

        
    render() {           
        return(
            <div>
             {this.state.comicBooks === 0 ? <NoHeroes /> :
             this.state.comicBooks.map(comic => (
                 <ComicBook 
                    key={comic.id}
                    id={comic.id}
                    title={comic.volumeInfo.title}
                    publisher={comic.volumeInfo.publisher}
                    publishedDate={comic.volumeInfo.publishedDate}
                    description={comic.volumeInfo.description}
                    image={comic.volumeInfo.imageLinks.thumbnail}
                    authors={comic.volumeInfo.authors}
                />
                ))}
            </div>
        )
    }
}

export default GoogleResults;