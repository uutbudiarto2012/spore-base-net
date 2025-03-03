'use client'
import { ApexOptions } from 'apexcharts';
import React from "react";
import ReactApexChart from 'react-apexcharts';

export default function AssetDistribution() {
  const [state] = React.useState<{ options: ApexOptions, series: number[] }>({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: "100%",
        type: 'donut',
        background: "transparent",
        animations: {
          enabled: false
        }
      },
      theme: {
        mode: "dark",
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ['#000'],
        width: 2,
        dashArray: 0,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        position: "bottom",
        horizontalAlign: 'center',
        fontWeight: "600",
        floating: false
      },
      labels: ['Chain A', 'Chain B', 'Chain C', 'Chain D', 'Chain E'],
    },
  });
  return (
    <div id="chart-donut" className='h-full'>
      <ReactApexChart options={state.options} series={state.series} type="donut" height={'100%'} width={"100%"} />
      <div id="html-dist"></div>
    </div>
  )
}
