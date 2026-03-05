/**
 * Chart color palette - 10 shades of blue
 * From light to dark for better visibility across different chart types
 */
export const CHART_COLORS = [
    "#60a5fa", // blue-400
    "#3b82f6", // blue-500
    "#2563eb", // blue-600
    "#1d4ed8", // blue-700
    "#1e40af", // blue-800
    "#7dd3fc", // sky-300
    "#38bdf8", // sky-400
    "#0ea5e9", // sky-500
    "#0284c7", // sky-600
    "#0369a1", // sky-700
] as const;

/**
 * Get a color for a specific index, cycling through available colors
 */
export function getChartColor(index: number): string {
    return CHART_COLORS[index % CHART_COLORS.length];
}

/**
 * Get multiple colors for a set of series
 */
export function getChartColors(count: number): string[] {
    return Array.from({ length: count }, (_, i) => getChartColor(i));
}



