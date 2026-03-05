"use client";

import {
  Area,
  AreaChart as RechartsAreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CHART_COLORS } from "./colors";

interface AreaChartProps {
  data: any[];
  config: ChartConfig;
  xAxisKey: string;
  yAxisKeys: string[];
  stacked?: boolean;
}

export function AreaChartComponent({
  data,
  config,
  xAxisKey,
  yAxisKeys,
  stacked = false,
}: AreaChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <ChartContainer config={config} className="h-full w-full">
      <RechartsAreaChart
        accessibilityLayer
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
        <Legend />
        {yAxisKeys.map((key, index) => (
          <Area
            key={key}
            dataKey={key}
            type="natural"
            fill={CHART_COLORS[index % CHART_COLORS.length]}
            fillOpacity={0.4}
            stroke={CHART_COLORS[index % CHART_COLORS.length]}
            stackId={stacked ? "a" : undefined}
          />
        ))}
      </RechartsAreaChart>
    </ChartContainer>
  );
}
