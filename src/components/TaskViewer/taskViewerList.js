import React from "react";
import { connect } from "react-redux";
import TaskView from "./taskView";

const TaskViwerList = (props) => {
	console.log(props.taskList, "FROM LIST...   ");
	return (
		<div id="task-view" key={props.taskList.length}>
			<h3>Task List</h3>
			{props.taskList.length === 0 ? (
				<p>No Task...</p>
			) : (
				props.taskList.map((task, index) => (
					<>
						<TaskView key={task._id} task={task} index={index} />
						<br />
					</>
				))
			)}
		</div>
	);
};

const mapStatetoProps = (store) => {
	return {
		taskList: store.taskDataProviderReducer.taskList
	};
};

export default connect(mapStatetoProps, null)(TaskViwerList);
