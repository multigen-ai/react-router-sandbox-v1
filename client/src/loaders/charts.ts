export interface MonthlyData {
    month: string;
    revenue: number;
    expenses: number;
    profit: number;
}

export interface QuarterlyData {
    quarter: string;
    revenue: number;
    expenses: number;
    profit: number;
}

export interface DepartmentPerformance {
    department: string;
    efficiency: number;
    quality: number;
    innovation: number;
    collaboration: number;
    satisfaction: number;
}

export interface CategoryDistribution {
    category: string;
    value: number;
}

export interface KPIData {
    totalRevenue: number;
    growthRate: number;
    activeUsers: number;
    conversionRate: number;
}

export interface PerformanceScore {
    metric: string;
    score: number;
}

export interface ChartsData {
    monthlyData: MonthlyData[];
    quarterlyData: QuarterlyData[];
    departmentPerformance: DepartmentPerformance[];
    categoryDistribution: CategoryDistribution[];
    kpiMetrics: KPIData;
    performanceScores: PerformanceScore[];
}

export async function chartsLoader(): Promise<ChartsData> {
    // Simulate async data fetching
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Monthly revenue data (12 months)
    const monthlyData: MonthlyData[] = [
        { month: "Jan", revenue: 125000, expenses: 85000, profit: 40000 },
        { month: "Feb", revenue: 132000, expenses: 87000, profit: 45000 },
        { month: "Mar", revenue: 148000, expenses: 92000, profit: 56000 },
        { month: "Apr", revenue: 155000, expenses: 95000, profit: 60000 },
        { month: "May", revenue: 168000, expenses: 98000, profit: 70000 },
        { month: "Jun", revenue: 182000, expenses: 102000, profit: 80000 },
        { month: "Jul", revenue: 195000, expenses: 108000, profit: 87000 },
        { month: "Aug", revenue: 188000, expenses: 105000, profit: 83000 },
        { month: "Sep", revenue: 202000, expenses: 112000, profit: 90000 },
        { month: "Oct", revenue: 215000, expenses: 118000, profit: 97000 },
        { month: "Nov", revenue: 228000, expenses: 122000, profit: 106000 },
        { month: "Dec", revenue: 245000, expenses: 128000, profit: 117000 },
    ];

    // Quarterly comparison data
    const quarterlyData: QuarterlyData[] = [
        { quarter: "Q1 2024", revenue: 405000, expenses: 264000, profit: 141000 },
        { quarter: "Q2 2024", revenue: 505000, expenses: 295000, profit: 210000 },
        { quarter: "Q3 2024", revenue: 585000, expenses: 325000, profit: 260000 },
        { quarter: "Q4 2024", revenue: 688000, expenses: 368000, profit: 320000 },
    ];

    // Department performance data (for radar chart)
    const departmentPerformance: DepartmentPerformance[] = [
        {
            department: "Sales",
            efficiency: 85,
            quality: 78,
            innovation: 72,
            collaboration: 88,
            satisfaction: 82,
        },
        {
            department: "Engineering",
            efficiency: 92,
            quality: 95,
            innovation: 98,
            collaboration: 85,
            satisfaction: 90,
        },
        {
            department: "Marketing",
            efficiency: 80,
            quality: 82,
            innovation: 88,
            collaboration: 92,
            satisfaction: 85,
        },
        {
            department: "Support",
            efficiency: 88,
            quality: 90,
            innovation: 75,
            collaboration: 95,
            satisfaction: 92,
        },
    ];

    // Product category distribution (for pie chart)
    const categoryDistribution: CategoryDistribution[] = [
        { category: "Enterprise", value: 45 },
        { category: "Professional", value: 30 },
        { category: "Starter", value: 15 },
        { category: "Custom", value: 10 },
    ];

    // KPI metrics
    const kpiMetrics: KPIData = {
        totalRevenue: 2183000,
        growthRate: 24.5,
        activeUsers: 125000,
        conversionRate: 3.8,
    };

    // Performance scores (for radial chart)
    const performanceScores: PerformanceScore[] = [
        { metric: "Customer Satisfaction", score: 92 },
        { metric: "Product Quality", score: 88 },
        { metric: "Delivery Speed", score: 85 },
        { metric: "Innovation Index", score: 78 },
        { metric: "Team Engagement", score: 90 },
    ];

    return {
        monthlyData,
        quarterlyData,
        departmentPerformance,
        categoryDistribution,
        kpiMetrics,
        performanceScores,
    };
}

