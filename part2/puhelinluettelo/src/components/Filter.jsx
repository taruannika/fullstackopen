// TODO this component handles filtering persons

const Filter = ({ searchInput, setSearchInput }) => {
  return (
    <div>
      Filter shown with{" "}
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default Filter;
