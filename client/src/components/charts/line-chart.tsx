"use client";

import {
  Line,
  LineChart as RechartsLineChart,
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

interface LineChartProps {
  data: any[];
  config: ChartConfig;
  xAxisKey: string;
  yAxisKeys: string[];
  curved?: boolean;
  dualAxis?: boolean;
}

export function LineChartComponent({
  data,
  config,
  xAxisKey,
  yAxisKeys,
  curved = false,
  dualAxis = false,
}: LineChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <ChartContainer config={config} className="h-full w-full">
      <RechartsLineChart
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
        <YAxis yAxisId="left" />
        {dualAxis && <YAxis yAxisId="right" orientation="right" />}
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        {yAxisKeys.map((key, index) => (
          <Line
            key={key}
            dataKey={key}
            type={curved ? "monotone" : "linear"}
            stroke={CHART_COLORS[index % CHART_COLORS.length]}
            strokeWidth={2}
            dot={data.length <= 20}
            yAxisId={dualAxis && index === 1 ? "right" : "left"}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
}
