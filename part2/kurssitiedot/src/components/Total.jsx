const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0);
  return <h4>Total of {total} exercises</h4>;
};

export default Total;
