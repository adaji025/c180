import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TodoChart: React.FC = () => {
  const series = [80];
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 10, // Margin between the inner and outer circle
          size: "50%", // Size of the inner circle
        },
        track: {
          background: "#2B2B36",
          strokeWidth: "100%",
          margin: 5,
          // dropShadow: {
          //   enabled: true,
          //   top: 2,
          //   left: 0,
          //   color: "#999",
          //   opacity: 1,
          //   blur: 2,
          // },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "24px",
            color: "#fff",
            fontWeight: "bold",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    labels: ["Average Results"],
    colors: ["#A9DFD8"],
  };

  return (
    <div className="bg-primary px-5 py-7 rounded-[10px] flex-1">
      <div className="font-semibold mb-2">Todo</div>
      <div className="text-xs text-grayColor mt-2">Total Todos</div>
      <div className="mt-2 font-bold text-xl text-[#A9DFD8]">200</div>
      <div className="text-xs text-grayColor mt-2">Completed Todos / Total</div>
      <div className="mt-5">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </div>
    </div>
  );
};

export default TodoChart;
