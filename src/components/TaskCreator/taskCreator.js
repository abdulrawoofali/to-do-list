import React from 'react';
import TextArea from '../TextArea/textArea'
import {handleSubmitAction} from'../redux/TaskDataProviderRedux/actionCreator'
import {handleClearAction,handleInputAction} from"../redux/TextAreaRedux/actionCreator"
import {connect} from "react-redux";

const mapStateToProbs = (store)=>{
    return{
        inputValue:store.inputReducer.inputValue,
        taskList:store.taskDataProviderReducer.taskList
    }
}

const TaskCreator = (props)=>{
    let inputValue = props.inputValue;
    const sendValueToParent = (_Inputvalue)=>{
       props.handleInputAction(_Inputvalue);

    }
    //console.log(props);
    const handleClick =()=>{
        let newValue = props.inputValue;
        props.handleSubmitAction({_id:props.taskList.length+1,taskDetails:newValue,isEdit:false});
        props.handleClearAction();
    }
    return<><h3>Create New Task..</h3><TextArea sendValueToParent={sendValueToParent} inputValue={inputValue}><button onClick={handleClick}>add</button></TextArea></>
}

 
export default connect(mapStateToProbs,{handleSubmitAction,handleClearAction,handleInputAction})(TaskCreator)

