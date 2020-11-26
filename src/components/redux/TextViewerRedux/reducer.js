import {HANDLE_EDIT} from "./actionContants";

const INIT_STATE = {
    isEdit : false
}
export default (state=INIT_STATE,action)=>{
    switch(action.type){
        case HANDLE_EDIT:{
            //api
            return{
                isEdit : !state.isEdit
            }
        }
        default : return state
    }
}