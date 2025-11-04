"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
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

interface BarChartProps {
  data: any[];
  config: ChartConfig;
  xAxisKey: string;
  yAxisKeys: string[];
  stacked?: boolean;
  horizontal?: boolean;
}

export function BarChartComponent({
  data,
  config,
  xAxisKey,
  yAxisKeys,
  stacked = false,
  horizontal = false,
}: BarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <ChartContainer config={config} className="h-full w-full">
      <RechartsBarChart
        accessibilityLayer
        data={data}
        layout={horizontal ? "vertical" : "horizontal"}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        {horizontal ? (
          <>
            <YAxis
              type="category"
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <XAxis type="number" />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
          </>
        )}
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        {yAxisKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
            radius={
              stacked
                ? index === yAxisKeys.length - 1
                  ? [4, 4, 0, 0]
                  : [0, 0, 0, 0]
                : [4, 4, 0, 0]
            }
            stackId={stacked ? "a" : undefined}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
}
