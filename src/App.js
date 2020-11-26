import logo from './logo.svg';
import './App.css';
import TaskCreator from "./components/TaskCreator/taskCreator"
import TaskViewerList from"./components/TaskViewer/taskViewerList"

function App() {
  return (<><div className="App"><TaskCreator/><TaskViewerList/></div></>
  );
}

export default App;
