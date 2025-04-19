'use client'
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { useHistoryAum } from '@/hooks/useSporeStats';
import { NumberComma } from '@/lib/utils';
import { ApexOptions } from 'apexcharts';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { DateRange } from 'react-day-picker';

export default function Portfolio() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: dayjs().startOf('month').toDate(),
    to: dayjs().endOf('month').toDate(),
  });
  const start_date = dateRange.from ? dayjs(dateRange.from).format('YYYY-MM-DD') : undefined;
  const end_date = dateRange.to ? dayjs(dateRange.to).format('YYYY-MM-DD') : undefined;

  const { data, isLoading } = useHistoryAum(start_date, end_date)
  const seriesData = useMemo(() => data?.map(item => item.aum) || [], [data])
  const categories = data?.map(item => item.date) || []
  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: "transparent",
      height: "100%",
      width: "100%",
      zoom: { enabled: false }
    },
    theme: { mode: "dark" },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 1 },
    grid: {
      borderColor: '#223',
      strokeDashArray: 6,
      position: 'back',
    },
    title: {
      text: 'Asset Value Movements',
      align: 'left'
    },
    xaxis: {
      type: "datetime",
      categories: categories
    },
    yaxis: {
      opposite: false,
      labels: {
        formatter: (value: number) => NumberComma(Math.round(value))
      }
    },
    legend: { horizontalAlign: 'left' }
  };
  const series = useMemo(() => [{
    name: "Value",
    data: seriesData
  }], [seriesData]);

  console.log({ dateRange })
  const handleChangeDateForm = async (values: {
    range: DateRange;
    rangeCompare?: DateRange;
  }) => {
    setDateRange(values.range);
  }
  return (
    <>
      <div className='flex mb-3'>
        <div className='flex justify-between w-full flex-col md:flex-row gap-2'>
          <div className='text-[#27CC99] uppercase text-lg font-semibold text-center'>Matrix Monthly</div>
          <DateRangePicker
            onUpdate={(values) => handleChangeDateForm(values)}
            initialDateFrom={start_date}
            initialDateTo={end_date}
            align="start"
            locale="en-GB"
            showCompare={false}
          />
        </div>
      </div>
      <div id="chart-portfolio" className='w-full h-full'>
        {!isLoading && data && (
          <>
            <ReactApexChart options={chartOptions} series={series} type="area" height={"360"} />
            <div id="html-dist-portfolio"></div>
          </>
        )}
      </div>
    </>
  )
}
