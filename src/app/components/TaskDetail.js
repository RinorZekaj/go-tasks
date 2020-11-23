import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTaskCompletion, setTaskName, setTaskGroup } from "../store/actions/Tasksactions";

import './TaskDetail.css'

function TaskDetail({ id, comments, task, isComplete, groups, setTaskComplete, setTaskName, setTaskGroup }) {
  return (
    <div>
      <div>
        <input className='input' value={task.name} onChange={(e) => setTaskName(id, e.target.value)}/>
      </div>
      <button className='reopen' onClick={() => setTaskComplete(id, !isComplete)}>{isComplete ? "Reopen" : "Complete"}</button>

      <select className='select' onChange={(e) => setTaskGroup(id, e.target.value)} value={task.group}>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
      <Link to="/" className='done'>Done</Link>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find((task) => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskComplete: (id, isComplete) =>
      dispatch(setTaskCompletion(id, isComplete)),
    setTaskName: (id, name) => dispatch(setTaskName(id, name)),
    setTaskGroup: (id, groupID) => dispatch(setTaskGroup(id, groupID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
