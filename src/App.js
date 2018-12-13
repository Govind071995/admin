import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Govind', age: 23 },
      { id: 2, name: 'Yash', age: 24 },
      { id: 3, name: 'Panda', age: 26}
    ],
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons =  this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: 'Govind Kumar Meena', age: 23 },
        { id: 2, name: newName, age: 24 },
        { id: 2, name: 'Panad', age: 27 }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id = id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    })
  }
  render() {
    const buttonStyle ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      // ':hover':{
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }
    let person = null;

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    if (this.state.showPerson) {
      person =(
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
            delete ={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            changed={this.nameChangeHandler} 
            key={person.id} >
            </Person>
          })}
        </div>
      )
      buttonStyle.backgroundColor = 'red'
      buttonStyle[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      };
    }
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(' ')}>Hello, I'm Govind Kumar Meena</p>
        <button
        style = {buttonStyle} 
        onClick={this.togglePersonHandler} >Switch</button>
        {
          person
        }
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;