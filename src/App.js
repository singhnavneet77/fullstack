import logo from './logo.svg';
import './App.css';
import Arrayexample from './playground/Arrayexample';
import Employee from './components/Employee';
import {Route,Routes,Link} from "react-router-dom";
import About from './components/ReactRouter/About'; 
import Help from './components/ReactRouter/Help';
import Policy from './components/ReactRouter/Policy';
import Header from './components/Header/Header';
import NewEmployee from "./components/NewEmployee/NewEmployee";
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
Arrayexample.testArray();
  function App() {
    const empName = "Ashish Rautela";
    const age = 30;
    const joiningDate = new Date(2023, 0, 15);
  
    const users = [
      {
        name: "Ashish Rautela",
        age: 30,
        joinDate: new Date(2021, 10, 15),
      },
      {
        name: "Vivek Srivastava",
        age: 40,
        joinDate: new Date(2022, 8, 20),
  
      },
    ];
  return(
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
    <div className="App">
      <Header></Header>
     {/* <Link to ="/about"> About </Link>
     <Link to="/help"> Help </Link>
     <Link to="/policy"> Policy </Link> */}
     
    <Routes>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/help" element={<Help></Help>}></Route>
      <Route path="/policy" element={<Policy></Policy>}></Route>
      <Route path="/newemployee" element={<NewEmployee></NewEmployee>}></Route>
      <Route path="/myemployee" element={<EmployeeTable></EmployeeTable>}></Route>
    </Routes>

    <hr></hr>
      <Employee
        empName={users[0].name}
        age={users[0].age}
        joiningDate={users[0].joinDate}
      ></Employee>
     
       <Employee
        empName={users[1].name}
        age={users[1].age}
        joiningDate={users[1].joinDate}
      ></Employee> 
      </div>
    
  );
}
export default App;
