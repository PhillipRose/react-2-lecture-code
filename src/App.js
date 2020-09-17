import React, {Component} from 'react';
import Header from './Components/Header';
import ListDisplay from './Components/ListDisplay';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Matt',
      todoList: ['Code the things', 'Eat', 'Sleep']
    }
    //inside construtor .bind prevents errors later.
    //set to variable and .bind this to the function.
    //keeps this. as this.App meaning this.state object.
    this.changeUsername = this. changeUsername.bind(this);
  }
  
  changeUsername(){
    this.setState({username: 'Eric'})
  }

  //Public Classfield Syntax
  //Arrow function to workaround .bind
  properContext = ()=>{
    this.setState({username: 'Aaron'})
  }
  
  //any data passed into the Component portion of the render return is accessable with props ie username = or greeting = 
  
  render(){
    // const mappedTodos = this.state.todoList.map((todo, i)=> {
    //   return <h2 key={i}>{todo}</h2>
    // })
    const mappedTodos = this.state.todoList.map((todo, i)=> {
      return(
        // ListDisplay is Component key and todo are props for ListDisplay
      <ListDisplay key={i} todo={todo}/> )
      
    })
  
    return (
      <div className="App">
        <Header username={this.state.username} greeting='Hello World' usernameFn = {this.changeUsername} secondUsername ={this.properContext} />
        <h1>My Todo List</h1>
        {mappedTodos}
        {/* Alternate to {mappedTodos} method */}

        {/* {this.state.todoList.map((todo, i) => (
         
            <ListDisplay key={i} todo={todo}/>
          )
        )} */}

      </div>
    )
  }
}

export default App;
