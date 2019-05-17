import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {
  constructor() {

    super()

    this.state = {

      cards: null,
      isUpdated:false,
      searchname: '',
      
      }
  }

  handleTextBoxChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  // componentDidMount() {
  //   this.populateCards()
  // }
  // ${this.state.searchname}
  populateCards = () => {
    let name = this.state.searchname
    let url = `https://api.scryfall.com/cards/search?q=${name}&unique=cards&as=grid&order=name`
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log("setting the state.")
        console.log(json.data)
      this.setState({cards: json.data})
    })
  }

  addClick(card) {
    let book = {title: this.state.title, genre: this.state.genre, publisher: this.state.publisher, year: this.state.year, imageurl: this.state.imageurl}
    fetch('http://localhost:8080/add-card/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
    
}

  render() {
    // const { cards } = this.state;
    // if (cards == null) {
    //   return null;
    // }
    let cardItems = null
    if (this.state.cards){
    let cards = this.state.cards
    let filtered = cards.filter(card => card.image_uris);
    cardItems = filtered.map((card) => {
    
      return (
        <li className="List">{card.name} - {card.id}
        <p></p><img className="Card" src={card.image_uris.png}/><p></p>
        <button onClick={() => this.addClick(card)}>Save to Collection</button>
        </li>
      )
    })
  }
  return (
      <div className="App">
        <h1>HOME PAGE</h1>
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter Card Name" name="searchname" />
        <button onClick={this.populateCards}>Search</button>
        <Login />
        <ul className="UList">

        {cardItems}
        </ul>
        

      </div>
    )
  }
}

export default App;
