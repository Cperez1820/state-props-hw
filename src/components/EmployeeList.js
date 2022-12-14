import EmployeeListItem from "./EmployeeListItem";
import EmployeesArray from "../Data";

const employees = EmployeesArray.map((elements, index)=>{
    return <EmployeeListItem key={index} {...elements} />;
});

export default function EmployeeList(props) {
    return <div id="employee-list">{employees}</div>
}