// TODO this component renders one person

const Person = ({ person }) => {
  const { name, number } = person;
  return (
    <p>
      {name} {number}
    </p>
  );
};

export default Person;
