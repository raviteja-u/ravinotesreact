import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      {id: "a", name: "Ravi", age: "28"},
      {id: "b", name: "Teja", age: "24"},
      {id: "c", name: "Rupa", age: "21"}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
   });
   const person = {...this.state.persons[personIndex]};
   person.name = event.target.value;
   const persons = [...this.state.persons];
   persons[personIndex] = person;
   this.setState({
     persons : persons
   });
  }

  togglePersonsHandler = () => {
    const showStatus = this.state.showPersons;
    this.setState({
      showPersons: !showStatus
    })
  }

  deletePersonHandler = (pIndex) => {
    const persons =  [...this.state.persons];
    persons.splice(pIndex, 1);
    this.setState({persons: persons});
    }

  render() {
    let allPersons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      allPersons = (
            <div>
              {this.state.persons.map((el, index) => {
                return <ErrorBoundary>
                <Person 
                delete={() => this.deletePersonHandler(index)} 
                name={el.name} 
                age={el.age}
                key={el.id}
                changed={(event) => this.nameChangeHandler(event, el.id)}/>
                </ErrorBoundary>
              })}
            </div>
      );
      btnClass = classes.Red;
    }

    let classess = [];

    if (this.state.persons.length <= 2) {
      classess.push('red');
    } 
    
    if (this.state.persons.length <= 1) {
      classess.push('bold');
    }

    return (
      <div className={classes.App}>
        <h1>I'm a React App</h1>
        <p className={classess.join(' ')}>This is working.</p>
        <button className={btnClass} onClick={() => this.togglePersonsHandler()}>Toggle Names</button>
       {allPersons}
      </div>
    );
  }
}

export default App;