import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./Components/TasksPage";
import { connect } from "react-redux";
import { createTask, editTask } from "./Action";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  };

  return (
    <div>
      <TasksPage
        onCreateTask={onCreateTask}
        tasks={props.tasks}
        onStatusChange={onStatusChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
