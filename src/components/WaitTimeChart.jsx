import { BarChart } from "@mui/x-charts/BarChart";

function WaitTimeChart() {
    const chartSetting = {
        yAxis: [
            {
                label: "minutes",
            },
        ],
    };
    return (
        <BarChart
            xAxis={[{ scaleType: "band", data: ["2024/03/07"] }]}
            series={[{ data: [205.38] }]}
           
            height={300}
            {...chartSetting}
        />
    );
}

export default WaitTimeChart;
