import React from "react";

const Statistic = ({ statistic }) => {
  const { name, total } = statistic;
  return (
    <div>
      <h2>{name}</h2>
      <h1>{total}</h1>
    </div>
  );
};

export default Statistic;
