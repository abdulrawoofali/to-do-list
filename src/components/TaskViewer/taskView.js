import React,{useState} from 'react';
import {connect} from "react-redux";
//import {handleUpdateAction} from "../redux/TaskDataProviderRedux/actionCreator";
import {handleEditAction,handleUpdateAction} from"../redux/TaskDataProviderRedux/actionCreator";
import {handleClearAction,handleInputAction} from"../redux/TextAreaRedux/actionCreator";
import TextArea from '../TextArea/textArea';


const TaskView = (props) => {
    const {taskDetails} = props.task;
    console.log(props.task);
    const [Inputvalue,setInputValue] = useState(taskDetails);
    const sendValueToParent = (_Inputvalue)=>{
        setInputValue(_Inputvalue);

}

const handleEdit=()=>{
    console.log(!props.task.isEdit,"changing edit..");
    ///console.log({...props.task,isEdit: !props.task.isEdit});
    props.handleEditAction([props.index,{...props.task,isEdit: !props.task.isEdit}]);
}

const handleUpdate = ()=>{
    props.handleUpdateAction([props.index,{...props.task,taskDetails:Inputvalue,isEdit:false}])
}



return(<> {props.task.isEdit ? (<TextArea inputValue={Inputvalue} sendValueToParent={sendValueToParent}><button onClick={handleUpdate}>Update</button></TextArea>):
<>
<p>{taskDetails}</p>
<button onClick ={handleEdit}>Edit</button>
</>}


</>)
}

// const mapStateToProps = (store)=>{
 
// }


export default connect(null,{handleEditAction,handleUpdateAction})(TaskView);
