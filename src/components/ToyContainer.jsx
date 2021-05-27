import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  
  const renderToys = props.toys.map(toy => <ToyCard  key={toy.id} toy={toy} deleteToy={props.deleteToy} addLike={props.addLike}/>)
  
  return(
    <div id="toy-collection">
      {renderToys}
    </div>
  );
}

export default ToyContainer;
