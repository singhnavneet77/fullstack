import './Employee.css'
import Statecomponent from './State/Statecomponent';
import useCounter from  './Hooks/useCounter';
function Employee(props){
    const {count,increment,decrement}=useCounter(0);
    const hello = "Hello world !!";
    const random = Math.random();
    const todayDate = Date(0,0,2019);
    // const todayYear =Year();
    const empName ="Sumit"
    const age = 30;
    return (
 <div class="wrapper">
    <h1>Hello!!</h1>
    <div>Employee Name !!</div>
    <div>{empName}</div>
    {/* <hr></hr> */}
    <div>Age</div>
    <div>{age}</div>
    <div>Date</div>
    <div>{todayDate}</div>

    <hr></hr>
    <Statecomponent title = {props.empName}></Statecomponent>
    <hr></hr>
    <div>
        <p>count:{count}</p>
        <button  onClick={increment}>Increment</button>
        <button  onClick={decrement}>Decrement</button>
    </div>
    </div>
    );
}
export default Employee; 