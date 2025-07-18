// ApexChartComponent.jsx
import  { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ApexChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: "line",
        height: 350,
      },
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Clean up chart on unmount
    return () => chart.destroy();
  }, []);

  return <div id="chart" ref={chartRef} />;
};

export default ApexChartComponent;
