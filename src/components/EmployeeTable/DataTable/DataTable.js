const Datatable = (props)=>{
return (
    <table>
         <thead>
            <tr>
             <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                 <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.department}</td>
                    <td>{item.salary}</td>
                 </tr>
                ))}
            </tbody>
    </table>
);
};
export default Datatable;