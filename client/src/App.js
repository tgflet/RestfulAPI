import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './components/List';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tasks: [],
      newTask : {
        task: ""
      }
    }
  }
  componentDidMount = () =>{
    this.getTasks();
    console.log('present')
  }
  getTasks = () => {
    axios.get("http://localhost:8000/task")
      .then(res =>{
        this.setState({tasks: res.data.tasks});
        
      }).catch(err => {
        console.log(err);
      });
  }
  achieve = (hs, e) => {
    e.completed = !e.completed;
    axios.put(`http://localhost:8000/task/${e._id}`,e)
      .then(res => {
        this.getTasks();
      }).catch(err => {
        console.log(err);
      }); 
  }
  remove = (hs, e) => {
    axios.delete(`http://localhost:8000/task/${e}`)
      .then(res =>{
        this.getTasks();
      }).catch(err => {
        console.log(err);
      })
  }
  setTask = (e) =>{
    let nT = {...this.state.newTask};
    nT.task = e.target.value;
    this.setState({newTask: nT});
  }
  createTask = (e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8000/task`, this.state.newTask)
      .then(res =>{
        console.log(res);
        this.getTasks();
        this.setState({newTask: {task: ""}});
      }).catch(err =>{
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
      
       <h1 className="TitleText">To Do List<span className="beta"> - (beta)</span></h1>
        <List arr = {this.state.tasks} 
        onAchieve={this.achieve}
        onDelete={this.remove}/>
        <form onSubmit={this.createTask}>
          <p>New Task:&nbsp;
          <input type="text" onChange={this.setTask} value={this.state.newTask.task}/>
          </p>
          <input type="submit" value="Add Task!"/>
        </form>
      </div>
    );
  }
}

export default App;
