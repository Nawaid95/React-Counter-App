import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    value_list : [
      {id: 1, value: 0, name: 'Python'},
      {id: 2, value: 0, name: 'Java'},
      {id: 3, value: 0, name: 'C'},
      {id: 4, value: 0, name: 'C++'},
      {id: 5, value: 0, name: 'Javascript'},
      {id: 6, value: 0, name: 'Ruby'},
      {id: 7, value: 0, name: 'Closure'},
      {id: 8, value: 0, name: 'C#'},
      {id: 9, value: 0, name: 'HTML'},
      {id: 10, value: 0, name: 'Typescript'},
      {id: 11, value: 0, name: 'CSS'},
      {id: 12, value: 0, name: 'PHP'},
      
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          counter={this.state.value_list}
        />
        <div className="jumbotron counters-container">
          <Counters 
            onReset={this.resetVal}
            onModify={this.handleValmod}
            onDelete={this.deleteVal}
            counter={this.state.value_list} 
          />
        </div>
      </React.Fragment>
    );
  }
  handleValmod = (counter, task) => {
    var value_list = [...this.state.value_list];
    var index = value_list.indexOf(counter);
    value_list[index] = {...counter};
    if (task === 'add') value_list[index].value++;
    else value_list[index].value--;
    this.setState({ value_list });
  };

  resetVal = () => {
    var value_list = this.state.value_list.filter(val => {
        val.value = 0;
        return val;
    });
    this.setState({ value_list });
  };

  deleteVal = (counter) => {
    var value_list = this.state.value_list.filter(val => val.id !== counter.id);
    this.setState({ value_list });
  };
}

export default App;
