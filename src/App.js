import React from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator/taskCreator";
import TaskViewerList from "./components/TaskViewer/taskViewerList";

function App() {
	return (
		<>
			<div className="App">
				<div>
					<TaskCreator />

					<TaskViewerList />
				</div>
			</div>
		</>
	);
}

export default App;
