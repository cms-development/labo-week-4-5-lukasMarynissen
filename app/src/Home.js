import React, { Component } from "react";
import Creatures from './components/creatures';

class Home extends Component {


  state = {
    creatures: []
  }

  componentDidMount() {
    fetch('http://localhost:8765/wp-json/wp/v2/creature?_embed')
    .then(res => res.json())
    .then((data) => {
      this.setState({ creatures: data });
      console.log(this.state.creatures);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>

        <Creatures creatures={this.state.creatures} />
      </div>

        
    );
  }
}

export default Home;