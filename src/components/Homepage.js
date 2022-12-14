import Header from "./Header";
import SearchBar from "./Searchbar";
import EmployeeList from "./EmployeeList";

export default function Homepage(props) {
    return(
        <div>
            <Header className="homepage" />
            <SearchBar />
            <EmployeeList />
        </div>
    )
}