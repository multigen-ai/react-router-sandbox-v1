import { promises as fs } from "fs";
import path from "path";
import type { Route } from "./+types/charts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaChartComponent } from "@/components/charts/area-chart";
import { BarChartComponent } from "@/components/charts/bar-chart";
import { LineChartComponent } from "@/components/charts/line-chart";
import { PieChartComponent } from "@/components/charts/pie-chart";
import { RadarChartComponent } from "@/components/charts/radar-chart";
import { RadialChartComponent } from "@/components/charts/radial-chart";
import { KPIMetrics } from "@/components/charts/kpi-metrics";
import type { ChartConfig } from "@/components/ui/chart";
import type { ChartsData } from "@/loaders/charts";

// Server-side loader - runs on Node.js, can access filesystem
export async function loader({ request }: Route.LoaderArgs) {
  try {
    // Try to read from synced data directory first
    const dataPath = path.join(process.cwd(), "data", "charts.json");
    const data = await fs.readFile(dataPath, "utf-8");
    return JSON.parse(data);
  } catch {
    // Fallback to mock data if file doesn't exist
    const { chartsLoader } = await import("@/loaders/charts");
    return await chartsLoader();
  }
}

export default function Charts({ loaderData }: Route.ComponentProps) {
  const data = loaderData as ChartsData;

  // Chart configurations
  const monthlyConfig: ChartConfig = {
    revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
    expenses: { label: "Expenses", color: "hsl(var(--chart-2))" },
    profit: { label: "Profit", color: "hsl(var(--chart-3))" },
  };

  const quarterlyConfig: ChartConfig = {
    revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
    expenses: { label: "Expenses", color: "hsl(var(--chart-2))" },
    profit: { label: "Profit", color: "hsl(var(--chart-3))" },
  };

  const departmentConfig: ChartConfig = {
    efficiency: { label: "Efficiency", color: "hsl(var(--chart-1))" },
    quality: { label: "Quality", color: "hsl(var(--chart-2))" },
    innovation: { label: "Innovation", color: "hsl(var(--chart-3))" },
    collaboration: { label: "Collaboration", color: "hsl(var(--chart-4))" },
    satisfaction: { label: "Satisfaction", color: "hsl(var(--chart-5))" },
  };

  const categoryConfig: ChartConfig = {
    Enterprise: { label: "Enterprise", color: "hsl(var(--chart-1))" },
    Professional: { label: "Professional", color: "hsl(var(--chart-2))" },
    Starter: { label: "Starter", color: "hsl(var(--chart-3))" },
    Custom: { label: "Custom", color: "hsl(var(--chart-4))" },
  };

  const performanceConfig: ChartConfig = {
    score: { label: "Score", color: "hsl(var(--chart-1))" },
  };

  const kpiConfig = {
    metrics: [
      {
        key: "totalRevenue",
        label: "Total Revenue",
        format: "currency" as const,
      },
      {
        key: "growthRate",
        label: "Growth Rate",
        format: "percentage" as const,
      },
      { key: "activeUsers", label: "Active Users", format: "number" as const },
      {
        key: "conversionRate",
        label: "Conversion Rate",
        format: "percentage" as const,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive financial and performance metrics visualization
          </p>
        </div>

        {/* KPI Metrics */}
        <div className="mb-8">
          <KPIMetrics data={[data.kpiMetrics]} config={kpiConfig} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Area Chart - Revenue Over Time */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>
                Monthly revenue, expenses, and profit over the past year
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <AreaChartComponent
                data={data.monthlyData}
                config={monthlyConfig}
                xAxisKey="month"
                yAxisKeys={["revenue", "expenses", "profit"]}
                stacked={false}
              />
            </CardContent>
          </Card>

          {/* Bar Chart - Quarterly Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Performance</CardTitle>
              <CardDescription>
                Quarterly revenue, expenses, and profit comparison
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <BarChartComponent
                data={data.quarterlyData}
                config={quarterlyConfig}
                xAxisKey="quarter"
                yAxisKeys={["revenue", "expenses", "profit"]}
                stacked={false}
              />
            </CardContent>
          </Card>

          {/* Line Chart - Revenue vs Profit */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Profit Trend</CardTitle>
              <CardDescription>
                Monthly revenue and profit trajectory
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChartComponent
                data={data.monthlyData}
                config={monthlyConfig}
                xAxisKey="month"
                yAxisKeys={["revenue", "profit"]}
                curved={true}
              />
            </CardContent>
          </Card>

          {/* Pie Chart - Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Product Category Distribution</CardTitle>
              <CardDescription>
                Revenue distribution by product tier
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <PieChartComponent
                data={data.categoryDistribution}
                config={categoryConfig}
                nameKey="category"
                valueKey="value"
                donut={true}
              />
            </CardContent>
          </Card>

          {/* Radar Chart - Department Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
              <CardDescription>
                Multi-dimensional performance metrics by department
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <RadarChartComponent
                data={data.departmentPerformance}
                config={departmentConfig}
                angleKey="department"
                radiusKeys={[
                  "efficiency",
                  "quality",
                  "innovation",
                  "collaboration",
                  "satisfaction",
                ]}
              />
            </CardContent>
          </Card>

          {/* Radial Chart - Performance Scores */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Scores</CardTitle>
              <CardDescription>
                Key performance indicators across all metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <RadialChartComponent
                data={data.performanceScores}
                config={performanceConfig}
                nameKey="metric"
                valueKey="score"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

