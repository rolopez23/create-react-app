import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput'
import UserOutput from './UserOutput'

class App extends Component {
  state = {
    username: 'Rob',
    adjectives: ['','still ']
  }

  newUsernameHandler = (event) => {
    this.setState({username: event.target.value});
    this.setState({adjectives: ['now ', 'still ']})
  }




  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.newUsernameHandler}
          username={this.state.username}/>
        <UserOutput name={this.state.username} adj={this.state.adjectives[0]}/>
        <UserOutput name={this.state.username} adj={this.state.adjectives[1]}/>
      </div>

    );
  }
}

export default App;
