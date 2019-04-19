import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import "react-router";
import {BrowserRouter,
    Route,
    Link
  } from 'react-router-dom';
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
    this.useAll();
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
  removeTag = () =>{
    const list = document.getElementsByClassName("addTask");
    for(let i = 0; i< list.length; i++){
      if(list[i].classList.length>1){
        list[i].classList.remove("selected")
      }
      // console.log(list[i].classList.length)
      // list[i].classList.add("addTask")  
    }
    ;
  }
  useAll = () => {
    this.removeTag();
    const element = document.getElementById("allButton");
    element.classList.add("selected");
  }
  useActive = () =>{
    this.removeTag();
    const element = document.getElementById("activeButton");
    element.classList.add("selected");
  }
  useComplete = () =>{
    this.removeTag();
    const element = document.getElementById("completeButton");
    element.classList.add("selected");
  }
  render() {
    return (
      <div className="App">
      
       <h1 className="TitleText">To Do List<span className="beta"> - (beta)</span></h1>
       <BrowserRouter>
       <div className="FilterBox">
        
        <Link to ="/"><button id = "allButton" onClick={this.useAll} className="addTask">All Tasks</button></Link>
        <Link to ="/active"><button id = "activeButton" onClick={this.useActive} className="addTask">Active Tasks</button></Link>
        <Link to ="/completed"><button id = "completeButton" onClick={this.useComplete} className="addTask">Completed Task</button></Link>
        
        
       </div>
       <Route exact path="/"
        render = {(props)=> 
        <List {...props} arr = {this.state.tasks} 
        condition = "all"
        onAchieve={this.achieve}
        onDelete={this.remove}/>}/>
      <Route exact path="/active"
        render = {(props)=> 
        <List {...props} arr = {this.state.tasks} 
        condition = "active"
        onAchieve={this.achieve}
        onDelete={this.remove}/>}/>
      <Route path="/completed"
        render = {(props)=> 
        <List {...props} arr = {this.state.tasks} 
        condition = "completed"
        onAchieve={this.achieve}
        onDelete={this.remove}/>}/>
       </BrowserRouter>
        <form onSubmit={this.createTask}>
        <fieldset className ="taskForm">
          <span>New Task:&nbsp;</span>
          <br />
          <input type="text" className="taskInput" onChange={this.setTask} value={this.state.newTask.task}/>
          <input type="submit" className="addTask" value="Add Task!"/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
