import {HANDLE_SUBMIT,HANDLE_EDIT,HANDLE_UPDATE} from "./actionConstants";


 
export const handleSubmitAction =(newTask)=>{
    console.log("action to create task triggered....");
    return {
        type:HANDLE_SUBMIT,
        payload:newTask
    }
};

export const handleEditAction =(data)=>{
    return {
        type:HANDLE_EDIT,
        payload:data
    }
}
export const handleUpdateAction = (data)=>{
   return{ type:HANDLE_UPDATE,
    payload:data}
}
