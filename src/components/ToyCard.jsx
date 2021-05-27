import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = (event) => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`,{
      method: 'DELETE'
    })
    .then(this.props.deleteToy(this.props.toy.id))
  }

  handleAddLike = () => {
    const newLikeAmt = this.props.toy.likes + 1
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`,{
      method: 'PATCH',
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({likes: newLikeAmt})
    })
    .then(res => res.json())
    .then(updatedToy => this.props.addLike(updatedToy))
  }
  
  render() {
    const {name,image,likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleAddLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
