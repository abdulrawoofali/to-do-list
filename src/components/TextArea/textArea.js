import React,{useState} from 'react';
import {connect} from "react-redux";
import {handleInputAction} from "../redux/TextAreaRedux/actionCreator";
function TextArea(props) {
   //const [inputValue,setInputValue] = useState(props.inputValue);
   console.log(props);
   const handleChanges = (event)=>{
       //setInputValue(event.target.value);
       props.sendValueToParent(event.target.value)
   }

return (<><textarea onChange={handleChanges} value={props.inputValue}/>{props.children}</>);
}

export default TextArea;

// const mapStateToProps = (store)=>{
//     return{
//         inputValue: store.inputReducer.inputValue
//     }
// }
 
// export default connect(mapStateToProps,{handleInputAction})(TextArea);