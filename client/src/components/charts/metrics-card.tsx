"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { CHART_COLORS } from "./colors";

interface MetricsCardProps {
  data: Array<Record<string, any>>;
  config: Record<string, any>;
  metrics: Array<{
    key: string;
    label: string;
    format?: "number" | "currency" | "percentage";
    trend?: boolean;
  }>;
}

function formatValue(
  value: any,
  format?: "number" | "currency" | "percentage"
): string {
  if (value === null || value === undefined) return "N/A";

  const num = typeof value === "number" ? value : parseFloat(value);

  if (isNaN(num)) return String(value);

  switch (format) {
    case "currency":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(num);
    case "percentage":
      return `${num.toFixed(2)}%`;
    case "number":
    default:
      return new Intl.NumberFormat("en-US").format(num);
  }
}

function getTrendIcon(change: number) {
  if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />;
  if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />;
  return <Minus className="h-4 w-4 text-gray-500" />;
}

export function MetricsCard({ data, config, metrics }: MetricsCardProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  // Get latest data point (or aggregate if needed)
  const latestData = data[data.length - 1] || data[0];

  return (
    <div className="grid gap-4 h-full">
      {metrics.map((metric, index) => {
        const value = latestData[metric.key];
        const color = CHART_COLORS[index % CHART_COLORS.length];

        return (
          <Card
            key={metric.key}
            style={{ borderLeftColor: color, borderLeftWidth: "4px" }}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatValue(value, metric.format)}
              </div>
              {metric.trend && data.length > 1 && (
                <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                  {getTrendIcon(value - data[data.length - 2][metric.key])}
                  <span>vs previous</span>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
