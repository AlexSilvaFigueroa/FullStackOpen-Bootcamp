const Total = ({values}) => {
    let total = values.reduce((a,b) => a + b, 0) 
  return (
    <div>
      <h1>Number of exercides</h1>
      <p>Total: {total}</p>
    </div>
  );
};

export default Total;
