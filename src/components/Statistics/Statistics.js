import React from "react";
import { useLoaderData } from "react-router-dom";
import Statistic from "../Statistic/Statistic";

const Statistics = () => {
  const statistics = useLoaderData();
  return (
    <div>
      <h2>This is Statisctics</h2>
      {statistics.data.map((statistic) => (
        <Statistic key={statistic.id} statistic={statistic}></Statistic>
      ))}
    </div>
  );
};

export default Statistics;
