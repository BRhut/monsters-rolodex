import './App.css';
import { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
  }

  // Arrow function => Bind function context to the place it is declared, to have "this" pointing to App object
  onSearchChange = (e) => {
    this.setState({ 
      searchField: e.target.value 
    });
  }

render() {
  const { monsters, searchField } = this.state;
  const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="Search monsters" handleChange={this.onSearchChange}/>

      <CardList monsters={
        filterdMonsters
      }></CardList>
    </div>
  );
}
}
export default App;
