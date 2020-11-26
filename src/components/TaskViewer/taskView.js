import React, { useState } from "react";
import { connect } from "react-redux";
//import {handleUpdateAction} from "../redux/TaskDataProviderRedux/actionCreator";
import {
	handleEditAction,
	handleUpdateAction,
	handleDeleteAction,
	handleTaskStatus
} from "../redux/TaskDataProviderRedux/actionCreator";
import TextArea from "../TextArea/textArea";

const TaskView = (props) => {
	const { taskDetails } = props.task;
	console.log(props.task);
	const [Inputvalue, setInputValue] = useState(taskDetails);
	const sendValueToParent = (_Inputvalue) => {
		setInputValue(_Inputvalue);
	};

	const handleEdit = () => {
		console.log(!props.task.isEdit, "changing edit..");
		///console.log({...props.task,isEdit: !props.task.isEdit});
		props.handleEditAction([
			props.index,
			{ ...props.task, isEdit: !props.task.isEdit }
		]);
	};

	const handleUpdate = () => {
		props.handleUpdateAction([
			props.index,
			{ ...props.task, taskDetails: Inputvalue, isEdit: false }
		]);
	};

	const handleDelete = () => {
		props.handleDeleteAction(props.index);
	};
	const handleStatus = () => {
		props.handleTaskStatus([
			props.index,
			{ ...props.task, isCompleted: !props.task.isCompleted }
		]);
	};

	return (
		<div
			style={{ backgroundColor: props.task.isCompleted ? "green" : "red" }}
			key={props.task.toString()}>
			{" "}
			{props.task.isEdit ? (
				<TextArea inputValue={Inputvalue} sendValueToParent={sendValueToParent}>
					<button onClick={handleUpdate}>Update</button>
				</TextArea>
			) : (
				<>
					<p>{taskDetails}</p>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>delete</button>
					<button onClick={handleStatus}>
						{props.task.isCompleted ? "In Complete" : "Complete"}
					</button>
				</>
			)}
		</div>
	);
};

// const mapStateToProps = (store)=>{

// }

export default connect(null, {
	handleEditAction,
	handleUpdateAction,
	handleDeleteAction,
	handleTaskStatus
})(TaskView);
