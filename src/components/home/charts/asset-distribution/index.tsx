"use client"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { useEffect, useState } from "react"
interface DataItem {
  name: string;
  // You can add other properties here depending on the structure of the data
  [key: string]: any; // This allows for other dynamic properties in the data
}
const data: DataItem[] = [
  { name: 'Chain A', value: 10 },
  { name: 'Chain B', value: 30 },
  { name: 'Chain C', value: 30 },
  { name: 'Chain D', value: 30 },
];

const xchartConfig = Object.keys(data).map(item => {
  const index = parseInt(item);
  return {
    [data[index].name]: data[index]
  }
})
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (
  { cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any
): JSX.Element => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export function AssetDistribution() {
  const [opacity, setOpacity] = useState({ name: 1, value: 1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the PieChart on the client side
  if (!mounted) {
    return null; // Prevent rendering on the server
  }

  const handleMouseEnter = (o:any) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o:any) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };
  return (
    <Card className="flex flex-col aspect-square">
      <CardHeader className="items-center pb-0">
        <CardTitle className="uppercase">Asset Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              stopOpacity={opacity.name}
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell style={{ outline: 'none' }} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
