"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import Chart component
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PostCommentChart = () => {
  const series = [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 5],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 6],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 150,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        borderRadiusApplication: "end", // 'around', 'end'
        borderRadiusWhenStacked: "last", // 'all', 'last'
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["#A9DFD8", "#2B2B36"],
  };

  return (
    <div className="bg-primary pt-7 pb-5 rounded-[10px] flex-1">
      <div className="font-semibold px-5 mb-2">Post by Comment volume</div>
      <div className="p-0">
        <Chart options={options} series={series} type="bar" height={150} />
      </div>
      <div className="flex items-center gap-10 px-10 mt-4 text-[10px]">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#A9DFD8]" />
          <div className="text-[10px] font-medium text-grayColor">Comment</div>
        </div>
        |
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#2B2B36]" />
          <div className="text-[10px] font-medium text-grayColor">Post</div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentChart;
