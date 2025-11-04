"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CHART_COLORS } from "./colors";

interface TableChartProps {
  data: any[];
  config: {
    columns: Array<{
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
      return new Intl.NumberFormat("en-US").format(num);
    default:
      return String(value);
  }
}

export function TableChartComponent({ data, config }: TableChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            {config.columns.map((col) => (
              <TableHead key={col.key}>{col.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              {config.columns.map((col) => (
                <TableCell key={col.key}>
                  {formatValue(row[col.key], col.format)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
