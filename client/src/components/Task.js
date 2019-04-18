import React, { Component } from 'react';


class Task extends Component{
  delete = () =>{
    this.props.onDelete(this.props.task);
  }
  achieve = () =>{
    this.props.onAchieve(this.props.task);
  }
  render(){
    return(
      <li>
        <div className="Memo">
        {(this.props.completed)? 
          <input type="checkbox" onClick={this.achieve} defaultChecked={this.props.completed}/>:
          <input type="checkbox" onClick={this.achieve} defaultChecked={this.props.completed}/>
          
              
            }
         
          
          {(this.props.completed)? 
          <span className = "Completed">{this.props.task}</span>:
          <span>{this.props.task}</span>
              
              }
          <button className="Delete" onClick={this.delete}>&times;</button>
        </div>
      </li>
    );
  }
}
export default Task;