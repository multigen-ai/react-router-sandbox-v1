"use client";

import {
  RadialBar,
  RadialBarChart as RechartsRadialBarChart,
  Legend,
  PolarAngleAxis,
} from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CHART_COLORS } from "./colors";

interface RadialChartProps {
  data: any[];
  config: ChartConfig;
  nameKey: string;
  valueKey: string;
}

export function RadialChartComponent({
  data,
  config,
  nameKey,
  valueKey,
}: RadialChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  // Transform data for radial chart
  const chartData = data.slice(0, 5).map((item, index) => ({
    name: item[nameKey],
    value: item[valueKey],
    fill: CHART_COLORS[index % CHART_COLORS.length],
  }));

  return (
    <ChartContainer config={config} className="h-full w-full">
      <RechartsRadialBarChart
        data={chartData}
        innerRadius="10%"
        outerRadius="80%"
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <RadialBar
          dataKey="value"
          cornerRadius={10}
          label={{ position: "insideStart", fill: "#fff" }}
        />
      </RechartsRadialBarChart>
    </ChartContainer>
  );
}
