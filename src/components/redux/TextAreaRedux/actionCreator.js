import {HANDLEINPUT,CLEAR} from "./actionConstants"
export const handleInputAction = (newInput)=>{
    return{
        type:HANDLEINPUT,
        payLoad:newInput
    }
}
export const handleClearAction =()=>{
    return {
        type:CLEAR
    }
}