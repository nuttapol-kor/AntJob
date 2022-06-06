import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const rand012 = () => {
  return Math.floor(Math.random() * 13);
};

export default function ChartsOTType() {
  const [series, setseries] = useState([
    rand012(),
    rand012(),
    rand012(),
    rand012(),
  ]);
  const [optionsChart, setOptionsChart] = useState({
    chart: {
      height: 250,
      type: "donut",
    },
    labels: ["OT x 1.0", "OT x 1.5", "OT x 2.0", "OT x 3.0"],
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: true,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    stroke: {
      colors: ["#212b36"],
      width: 10,
    },
    options: {
      dataLabels: {
        enabled: false,
      },
    },
  });

  return (
    <Chart height={250} options={optionsChart} series={series} type="donut" />
  );
}
