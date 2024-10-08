import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";
import { UsersTypes } from "../types/users";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IProps {
  users: UsersTypes[] | null;
}
const PostInsights = ({ users }: IProps) => {
  const userNames = users?.slice(0, 8).map((item) => item.name.split(" ")[0]);

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
    xaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
      categories: userNames || [],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
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
    tooltip: {
      theme: "dark",
    },
  };

  const series = [
    {
      name: "",
      data: [14, 20, 80, 19, 42, 1, 42, 10],
    },
  ];
  return (
    <div className="bg-primary px-5 py-7 rounded-[10px]  md:w-4/6">
      <div className="font-semibold mb-2">Post Insights</div>
      <div className="mt-10">
        <Chart options={options} series={series} type="area" height={200} />
      </div>
    </div>
  );
};

export default PostInsights;
