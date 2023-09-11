import Datatable from "./DataTable/DataTable";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  const empData = [
    {
      id: 1,
      name: "Sahil",
      address: "New Delhi",
      department: "CSE",
      salary: 10,
    },
    {
      id: 2,
      name: "Sumit",
      address: "Delhi",
      department: "CSE",
      salary: 15,
    },
    {
      id: 3,
      name: "Navneet Kumar",
      address: "Noida",
      department: "CSE",
      salary: 20,
    },
  ];

  const dataHeader = ["Id", "Name", "Address", "Department", "Salary"];

  return (
    <div>
      <h1>My Employees</h1>
      <Datatable data={empData} header={dataHeader}></Datatable>
    </div>
  );
};
export default EmployeeTable;