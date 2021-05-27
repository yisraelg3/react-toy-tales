import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    toys: [],
    display: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toyArr => this.setState({
      toys: toyArr
    }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (newToy) => {
    console.log(newToy)
    this.setState({
      toys: [...this.state.toys, newToy]
    })
  }

  deleteToy = (id) => {
    this.setState({
      toys: this.state.toys.filter(toy => toy.id !== id)
    })
  }


  addLike = (updatedToy) => {
    this.setState({
      toys: this.state.toys.map(toy => {
        if (toy.id === updatedToy.id) {
          return updatedToy
        } else {
          return toy
        }
      })
    })
  }

  render(){
    
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} addLike={this.addLike}/>
      </>
    );
  }

}

export default App;
