// IMPORTING DEPENDENCIES
import React, { Component } from 'react'

// DEFINING THE COMPONENT
// ! EXPORTING IS ALREADY DONE HERE, TOO.
export default class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : this.props.user.age
            // ? had this.props.age prior, and this doesn't work, because in order to access the age, we first need to access the user dictionary.
        };
    }

    getOlder = () => {
        // console.log(this.state.age)
        this.setState({
            age : this.state.age + 1
        })
    }

  render() {
      const {firstName, lastName, age, hairColor} = this.props.user;
    // console.log(this.props.firstName)
    // * DECONSTRUCTING this.props allows us to clean up the HTML.
    return (
      <fieldset>
        <legend>UserCard.jsx</legend>
        {/* DECONSTRUCTING = no more this.props.firstName, etc. */}
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={ this.getOlder }>Happy Birthday!!</button>
      </fieldset>
    )
  }
}

// ! SEE ABOVE, EXPORT ALREADY DONE.
// export default UserCard;
