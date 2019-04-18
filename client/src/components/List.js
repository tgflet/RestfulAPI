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
        {this.props.arr.map( (item, i)=>
          <Task key={i}
          task={item.task}
          completed={item.completed}
          onAchieve={this.achieve.bind(this, item)}
          onDelete={this.delete.bind(this, item._id)}/>
          )}

      </ul>
    );
  }
}
export default List;