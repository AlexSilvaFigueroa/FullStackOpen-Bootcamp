import { handleCourseCollector } from '../infrastructure/storage/coursesStorage'

const Course = ({ dataCourse } ) => {
    const { parts } = dataCourse
    const newCollectionExercises = handleCourseCollector(parts)
    let totalCourses = newCollectionExercises.reduce((a, b) => a + b, 0)

    return (
        <div>
            <h3>{dataCourse.name}</h3>
            {parts.map((x) => (
                <h4 key={x.id}>{x.name}: {x.exercises}</h4>
            ))}
            <p>Total {dataCourse.name} courses: {totalCourses}</p>
        </div>
    )
}

export default Course