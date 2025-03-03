'use client'
import { ApexOptions } from 'apexcharts';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function Portfolio() {
  const [state] = React.useState<{
    options: ApexOptions, series: {
      name: string,
      data: number[]
    }[]
  }>({
    series: [{
      name: "Value",
      data: [10, 41, 35, 51, 49, 49, 62, 69, 71, 41, 35, 51, 48, 60, 62, 69, 91, 48, 30, 41, 35, 51, 49, 62, 69, 91, 108, 128]
    }],
    options: {
      chart: {
        type: 'area',
        toolbar: { show: false },
        background: "transparent",
        height: "100%",
        width:"100%",
        zoom: {
          enabled: false,
        }
      },
      theme: {
        mode: "dark"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1
      },
      grid: {
        borderColor: '#223',
        strokeDashArray: 6,
        position: 'back',
      },
      // title: {
      //   text: 'Portfolio',
      //   align: 'left'
      // },
      subtitle: {
        text: 'Asset Value Movements',
        align: 'left'
      },
      xaxis: {
        type: "datetime",
        categories: [
          1738368000000, 1738454400000, 1738540800000, 1738627200000, 1738713600000,
          1738800000000, 1738886400000, 1738972800000, 1739059200000, 1739145600000,
          1739232000000, 1739318400000, 1739404800000, 1739491200000, 1739577600000,
          1739664000000, 1739750400000, 1739836800000, 1739923200000, 1740009600000,
          1740096000000, 1740182400000, 1740268800000, 1740355200000, 1740441600000,
          1740528000000, 1740614400000, 1740700800000
        ]
      },
      yaxis: {
        opposite: false
      },
      legend: {
        horizontalAlign: 'left'
      }
    },
  });
  return (
    <div id="chart-portfolio" className='w-full h-full'>
      <ReactApexChart options={state.options} series={state.series} type="area" height={"100%"} />
      <div id="html-dist-portfolio"></div>
    </div>
  )
}
