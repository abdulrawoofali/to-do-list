import {
	HANDLE_SUBMIT,
	HANDLE_EDIT,
	HANDLE_UPDATE,
	HANDLE_DELETE,
	HANDLE_STATUS
} from "./actionConstants";

const INIT_STATE = {
	taskList: []
};

export default (state = INIT_STATE, action) => {
	//console.log("action reached reducer...","@Text Area...");
	//console.log("Am Data Reducer with my state =>",state)
	switch (action.type) {
		case HANDLE_SUBMIT: {
			console.log(action);
			return {
				taskList: [action.payload, ...state.taskList]
			};
		}
		case HANDLE_EDIT: {
			const [index, task] = action.payload;
			const copyOfTaskList = [...state.taskList];
			copyOfTaskList.splice(index, 1, task);
			console.log(copyOfTaskList);
			return {
				...state,
				taskList: copyOfTaskList
			};
		}
		case HANDLE_UPDATE: {
			const [index, task] = action.payload;
			const copyOfTaskList = [...state.taskList];
			copyOfTaskList.splice(index, 1, task);
			console.log(copyOfTaskList);
			return {
				...state,
				taskList: copyOfTaskList
			};
		}
		case HANDLE_DELETE: {
			const listAfterDelete = state.taskList.filter((ele, index) => {
				return index !== action.payload;
			});
			return {
				...state,
				taskList: listAfterDelete
			};
		}
		case HANDLE_STATUS: {
			const [index, task] = action.payload;
			const copyOfTaskList = [...state.taskList];
			copyOfTaskList.splice(index, 1, task);
			return {
				...state,
				taskList: copyOfTaskList
			};
		}
		default:
			return state;
	}
};
