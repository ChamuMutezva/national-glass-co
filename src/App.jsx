import "./App.css";
// import BarChartStack from "./components/BarChart";
import BatchTable from "./components/BatchTable";
import StatusChart from "./components/StatusChart";
import { Container, Grid } from "@mui/material";
import WaitTimeChart from "./components/WaitTimeChart";
import ProgressDetails from "./components/ProgressDetails";

function App() {
    return (
        <Container maxWidth={false}>
            <h1>Furnace Dashboard</h1>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ProgressDetails />
                </Grid>
                <Grid item xs={4}>
                    <StatusChart />
                    <WaitTimeChart />
                </Grid>
                <Grid item xs={4}>
                    <BatchTable />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
