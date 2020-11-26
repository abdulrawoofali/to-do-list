import {CLEAR, HANDLEINPUT} from"./actionConstants"

const INIT_STATE = {
    inputValue:"",
}
export default (state=INIT_STATE,action)=>{
   // console.log("action reached reducer...","@Text Area...",state);
    switch(action.type){
        case HANDLEINPUT: {
            return{
                ...state,
                inputValue:action.payLoad

            }
        }
        case CLEAR:return{
            ...state,
            inputValue:""
        }
        default: return state;
    }

}