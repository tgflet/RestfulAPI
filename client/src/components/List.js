import React, {Component} from 'react';
import Task from './Task';

class List extends Component{
  delete = (e) =>{
    this.props.onDelete(this.props.task, e);
  }
  achieve = (e) =>{
    this.props.onAchieve(this.props.task, e);
  }
  
  render(){
    return(
      <ul>
        {this.props.arr.map( (item, i)=>{
          if(this.props.condition === "active"){
            return !item.completed ?(
              <Task key={i}
            task={item.task}
            completed={item.completed}
            onAchieve={this.achieve.bind(this, item)}
            onDelete={this.delete.bind(this, item._id)}/>
            ):null
          }
          else if(this.props.condition === "completed"){
            return item.completed ?(
              <Task key={i}
            task={item.task}
            completed={item.completed}
            onAchieve={this.achieve.bind(this, item)}
            onDelete={this.delete.bind(this, item._id)}/>
            ):null
          }
          else{
            return item.task ?(
              <Task key={i}
            task={item.task}
            completed={item.completed}
            onAchieve={this.achieve.bind(this, item)}
            onDelete={this.delete.bind(this, item._id)}/>
            ):null     
            }

          }
          )}

      </ul>
    );
  }
}
export default List;