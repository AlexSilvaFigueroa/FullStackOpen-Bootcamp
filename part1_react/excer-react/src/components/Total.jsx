import { handleCourseCollector } from '../infrastructure/storage/coursesStorage'

const Total = ({exercises}) => {
  const totalCourses = handleCourseCollector(exercises)
  let total = totalCourses.reduce((a, b) => a + b, 0);

  return (
    <div>
      <h3>Number of exercides</h3>
      <p>Total: {total}</p>
    </div>
  );
};

export default Total;
