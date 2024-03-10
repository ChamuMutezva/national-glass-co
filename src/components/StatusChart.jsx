import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ResponsiveChartContainer } from "@mui/x-charts";
import { Box } from "@mui/material";

import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import {
    BROKENGLASS,
    DATATIME,
    TARGETDATA,
    TOUGHENEDGLASS,
    AVERAGEDATA,
} from "../data";
import TougheningOptions from "./TougheningOptions";

const series = [
    {
        type: "bar",
        stack: "A",
        yAxisKey: "eco",
        label: "Broken",
        data: BROKENGLASS,
    },
    {
        type: "bar",
        stack: "A",
        yAxisKey: "eco",
        label: "Toughened",
        data: TOUGHENEDGLASS,
    },
    {
        type: "line",
        label: "target",
        yAxisKey: "eco",
        color: "red",
        data: TARGETDATA,
    },
    {
        type: "line",
        label: "average",
        yAxisKey: "eco",
        color: "black",
        data: AVERAGEDATA,
    },
];

function StatusChart() {
    return (
        <Box sx={{ flexBasis: "50%" }}>
            <h2>Status</h2>
            <TougheningOptions />
            <ResponsiveChartContainer
                series={series}
                height={400}
                xAxis={[
                    {
                        id: "date",
                        data: DATATIME,
                        scaleType: "band",
                        valueFormatter: (value) => value.toString(),
                    },
                ]}
                yAxis={[
                    {
                        id: "eco",
                        scaleType: "linear",
                    },
                    {
                        id: "pib",
                        scaleType: "log",
                    },
                ]}
            >
                <BarPlot />
                <LinePlot />
                <LinePlot />
                <ChartsXAxis
                    label="Date - Time"
                    position="bottom"
                    axisId="date"
                />
                <ChartsYAxis label="kilograms" position="left" axisId="eco" />
            </ResponsiveChartContainer>
        </Box>
    );
}

export default StatusChart;
