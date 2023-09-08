import { useState } from "react";
let  c=0;

const Statecomponent = (props) =>{
const[title,setTitle] = useState(props.title);
const updateClickHandler = () => {
    setTitle("This is updated !!" + c++);
  };
return(
    <div>
        <p>{title}</p>
        <button class="btn"onClick={updateClickHandler}>Click to update</button>
   
    </div>
);

};
export default Statecomponent; 