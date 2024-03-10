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
            <header>
                <h1>Furnace Dashboard</h1>
            </header>
            <main>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <ProgressDetails />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <StatusChart />
                        <WaitTimeChart  />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <BatchTable />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}

export default App;
