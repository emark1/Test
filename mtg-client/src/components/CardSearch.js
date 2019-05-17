import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'

export class AddBook extends Component {

    constructor() {

        super()
    
        this.state = {
          //cards will be an array filled with objects sent from the server
          cards: [],
          name: '',
          cardid: '',
          imageuripng: '',
          artist: '',
          cmc: '',
          rarity: '',
          power: '',
          price: 0,
          }
      }
      
    handleTextBoxChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    }

    // handleSearchClick = () => {
    // let book = {title: this.state.title, genre: this.state.genre, publisher: this.state.publisher, year: this.state.year, imageurl: this.state.imageurl}
    // fetch('http://localhost:8080/api/books', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(book)
    // })
    // }
    
    render() {
        return (
        <div>
            <h1>Search for a Card: </h1>
            <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter Card Name" name="name" />
            {/* <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter genre" name="genre" />
            <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter publisher" name="publisher" />
            <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter year" name="year" />
            <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter imageurl" name="imageurl" /> */}
            <button onClick={this.handleSearchClick}><Link to="/view-search-results">Search</Link></button>
        </div>
        )
    }
}