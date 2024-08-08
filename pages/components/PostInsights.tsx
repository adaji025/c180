import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PostInsights = () => {
  const options: ApexOptions = {
    chart: {
      height: 150,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {},
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    // colors: [ "rgba(169, 223, 216, 0.01)"],
  };

  const series = [
    {
      name: "",
      data: [
        31, 40, 28, 51, 42, 51, 42, 10, 109, 31, 40, 28, 51, 42, 109, 31, 40,
        28, 51, 42, 109, 31, 40, 28,
      ],
    },
  ];
  return (
    <div className="bg-primary px-5 py-7 rounded-[10px]  w-4/6">
      <div className="font-semibold mb-2">Post Insights</div>
      <div className="mt-10">
        <Chart options={options} series={series} type="area" height={250} />
      </div>
    </div>
  );
};

export default PostInsights;
