import { CREATE_TASK, EDIT_TASK } from "../Action/types";

const initialState = [
  /* {
    id: 1,
    title: "Learn ReactJS",
    description: "Let's learn React js today!",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "lets learn redux today!",
    status: "In Progress",
  }, */
];

export const tasks = (state = { tasks: initialState }, action) => {
  /* if (action.type === EDIT_TASK) {
    const { payload } = action;
    return {
      tasks: state.tasks.map((task) => {
        if (task.id === payload.id) {
          return Object.assign({}, task, payload.params);
        }
        return task;
      }),
    };
  } */ ////-////////////////////////////////

  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case CREATE_TASK: {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }

    default:
      return state;
  }
};
