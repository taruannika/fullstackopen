import StatisticLine from "./StatisticLine";

const Statistics = ({ reviews }) => {
  const all = Object.values(reviews).reduce(
    (total, review) => total + review,
    0
  );
  const content = [
    {
      good: reviews.good,
      neutral: reviews.neutral,
      bad: reviews.bad,
      all: all,
      average: all === 0 ? 0 : (reviews.good * 1 + reviews.bad * -1) / all,
      positive: all === 0 ? 0 : (reviews.good / all) * 100,
    },
  ];

  if (all === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        {content.map((obj) =>
          Object.entries(obj).map(([text, value]) => (
            <StatisticLine key={text} text={text} value={value} />
          ))
        )}
      </tbody>
    </table>
  );
};

export default Statistics;
