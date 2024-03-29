import React from "react";
import API from "../../util/API"

class Discover extends React.Component{
  state = {
    dog: {},
  };


 componentDidMount() {
  API.search("/breeds/image/random").then(data => {
    this.setState({dog: data.data});
    console.log(data);
  })
 }
 
  render() {
    return (
    <div>
      <h1>Discover</h1>
      <img src= {this.state.dog.message} alt="Dog"/>
      <button onClick={matchDog} className="btn btn-primary">I like this dog</button>
      <button onClick={dislikeDog} className="btn btn-primary">I don't like this dog</button>
      <h2>Friends: {this.state.friends}</h2>
    </div>
    );
  }
}

export default Discover;
