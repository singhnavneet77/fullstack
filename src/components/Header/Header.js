import {Link} from "react-router-dom";
import './Header.css'
const Header = () => {
   const headerLinks = [
       {
            link:"/about",
            text:"About",
        },
        {
            link:"/help",
            text:"Help",
        },
        {
            link:"/policy",
            text:"Policy",
        },
        {
            link:"/newemployee",
            text:"New employee",
        },
        {
            link:"/myemployee",
            text:"EmployeeData",
        },
    ];
    return(
        <div>
            <ul>
                {headerLinks.map((item,index)=>(
                <Link to={item.link}>{item.text}</Link>  
                ))   
                }
        {/* <li>
            <Link to ="/about"> About </Link></li>
        <li>
            <Link to="/help"> Help </Link></li>
        <li>
            <Link to="/policy"> Policy </Link></li>
            <li>
            <Link to="/newemployee"> New employee</Link></li> */}
     </ul>
     </div>
    );
}
export default Header;