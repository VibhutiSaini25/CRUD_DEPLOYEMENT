
import {Link} from "react-router-dom";

function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link style={{fontFamily:"KayPhoDu"}}to="/" class="navbar-brand mx-5 header">CRUD operations</Link>
            <div class="nav mx-5">
                <Link to="/create-student" class="nav-link">Create Student</Link>
                <Link to="/student-list" class="nav-link">Student List</Link>
            </div>
        </nav>
    )
}
export default Nav;

