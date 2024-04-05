import { Link } from "react-router-dom";

export default function StudentItem({student}){
    return(
        <Link to={`/student/${student.id}`} className="StudentItem">

        </Link>
    )
}