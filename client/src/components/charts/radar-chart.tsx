"use client";

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CHART_COLORS } from "./colors";

interface RadarChartProps {
  data: any[];
  config: ChartConfig;
  angleKey: string;
  radiusKeys: string[];
}

export function RadarChartComponent({
  data,
  config,
  angleKey,
  radiusKeys,
}: RadarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <ChartContainer config={config} className="h-full w-full">
      <RechartsRadarChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey={angleKey} />
        <PolarRadiusAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        {radiusKeys.map((key, index) => (
          <Radar
            key={key}
            name={key}
            dataKey={key}
            stroke={CHART_COLORS[index % CHART_COLORS.length]}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
            fillOpacity={0.6}
          />
        ))}
      </RechartsRadarChart>
    </ChartContainer>
  );
}
