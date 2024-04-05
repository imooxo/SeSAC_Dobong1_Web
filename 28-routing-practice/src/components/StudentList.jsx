import StudentItem from "./StudentItem"

export default function StudentList({students}){
    return(
        <section className="StudentList">
            {students.map((student)=>{
                return <StudentItem key = {student.id} student={student}/>
            })}
        </section>
    )
}