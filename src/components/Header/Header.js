import {Link} from "react-router-dom";
import './Header.css'
const Header = () => {
    return(
        <div>
            <ul>
        <li>
            <Link to ="/about"> About </Link></li>
        <li>
            <Link to="/help"> Help </Link></li>
        <li>
            <Link to="/policy"> Policy </Link></li>
            <li>
            <Link to="/newemployee"> New employee</Link></li>
     </ul>
     </div>
    );
}
export default Header;