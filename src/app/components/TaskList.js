import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/actions/Tasksactions";
import { Link } from "react-router-dom";

import './TaskList.css'

function TaskList({ tasks, name, id, createNewTask }) {
  console.log(id);

  return (
    <div className='task-list-container'>
      <h2>{name}</h2>
      <div className='tasks-holder'>
        {tasks.map((task) => (
          <Link to={`/task/${task.id}`} key={task.id} className='task-link'>
            <div className={`task-item ${id}`}>{task.name}</div>
          </Link>
        ))}
      </div>
      <button onClick={() => createNewTask(id)} className='add-task-button'>Add new task</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (id) => dispatch(requestTaskCreation(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
