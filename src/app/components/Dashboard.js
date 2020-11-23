import React from "react";
import { connect } from "react-redux";
import TaskList from './TaskList';

import './Dashboard.css'

function Dashboard({ groups }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='task-groups-holder'>
        {groups.map((group) => (
          <TaskList id={group.id} name={group.name} key={group.id}/>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
