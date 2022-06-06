import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const rand = (max) => {
  return Math.floor(Math.random() * max);
};

export default function ChartsArea(props) {
  const { max } = props;
  const [series, setseries] = useState([
    {
      data: [
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max),
        rand(max)
      ],
    },
  ]);
  const [optionsChart, setOptionsChart] = React.useState({
    chart: {
      type: "area",
      height: 250,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 100,
          },
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: [
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
          ],
        },
      },
      axisBorder: {
        show: false,
        color: "#b6b6b",
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
            "#637381",
          ],
        },
      },
    },
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: true,
      borderColor: "#b5b5b533",
      strokeDashArray: 4,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      inverseOrder: false,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#007afd",
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  });

  return (
    <Chart height={250} options={optionsChart} series={series} type="area" />
  );
}
