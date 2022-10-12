import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

const Statistics = () => {
  const statictics = useLoaderData().data;
  return (
    <div className="">
      <h2 className="text-purple-500 font-bold text-3xl mt-20">
        Statistics page
      </h2>
      <div className="flex justify-center">
        <BarChart width={400} height={400} data={statictics}>
          <Line
            type="monotone"
            className="p-5 m-5"
            dataKey="total"
            tick={statictics}
          />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          &nbsp;
          <Bar dataKey="total" barSize={50} fill="#8884d8" label={statictics} />
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
