"use client";

import { Pie, PieChart as RechartsPieChart, Cell, Legend } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CHART_COLORS } from "./colors";

interface PieChartProps {
  data: any[];
  config: ChartConfig;
  nameKey: string;
  valueKey: string;
  donut?: boolean;
}

export function PieChartComponent({
  data,
  config,
  nameKey,
  valueKey,
  donut = false,
}: PieChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <ChartContainer config={config} className="h-full w-full">
      <RechartsPieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={donut ? 60 : 0}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
            />
          ))}
        </Pie>
      </RechartsPieChart>
    </ChartContainer>
  );
}
