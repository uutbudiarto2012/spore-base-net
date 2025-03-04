'use client'
import { useDistributionReward } from '@/hooks/useSporeStats';
import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';

export default function AssetDistribution() {
  const { data } = useDistributionReward()
  const [chartData, setChartData] = useState<{ options: ApexOptions, series: number[] }>({
    series: [],
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
      labels: []
    },
  });
  useEffect(() => {
    if (data) {
      setChartData(prev => ({
        ...prev,
        series: data.balanceUsds || [],
        options: {
          ...prev.options,
          labels: data.labels || []
        }
      }));
    }
  }, [data]);
  return (
    <div id="chart-donut" className='h-full'>
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={'100%'} width={"100%"} />
      <div id="html-dist"></div>
    </div>
  )
}
