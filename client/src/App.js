import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './components/topNav';
import Todo from './components/todo';
import TodoMasonary from './components/todoMasonary';



class App extends Component {
  render() {
    return (
      <div className="App">
         <header>
      <h1>
        
        Keeper
      </h1>
    </header>
        <TopNav/>
        <Todo/>
        <TodoMasonary />
      </div>
    );
  }
}

export default App;
