"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface KPIMetricsProps {
  data: Array<Record<string, any>>;
  config: {
    metrics: Array<{
      key: string;
      label: string;
      format?: "number" | "currency" | "percentage";
    }>;
  };
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
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    case "percentage":
      return `${num.toFixed(2)}%`;
    case "number":
      if (num >= 1000000) {
        return `${(num / 1000000).toFixed(2)}M`;
      } else if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
      }
      return new Intl.NumberFormat("en-US").format(num);
    default:
      return String(value);
  }
}

export function KPIMetrics({ data, config }: KPIMetricsProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  const latestData = data[data.length - 1] || data[0];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {config.metrics.map((metric) => {
        const value = latestData[metric.key];

        return (
          <Card
            key={metric.key}
            className="bg-gradient-to-t from-primary/5 to-card shadow-sm"
          >
            <CardHeader>
              <CardDescription>{metric.label}</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums">
                {formatValue(value, metric.format)}
              </CardTitle>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
