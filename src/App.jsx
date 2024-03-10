import "./App.css";
import logo from "./assets/national-glass-Logo.png";
import BatchTable from "./components/BatchTable";
import StatusChart from "./components/StatusChart";
import { Container, Grid, Typography } from "@mui/material";
import WaitTimeChart from "./components/WaitTimeChart";
import ProgressDetails from "./components/ProgressDetails";

function App() {
    return (
        <Container maxWidth={false}>
            <header
                style={{
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <a href="/" className="logo">
                    <img src={logo} alt="National glass distribution" />
                </a>
                <Typography variant="h1" color={"white"} gutterBottom>
                    Furnace Dashboard
                </Typography>
            </header>
            <main>
                <Grid container spacing={2} marginBlock={"1.5rem"}>
                    <Grid item xs={12}>
                        <ProgressDetails />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StatusChart />
                        <WaitTimeChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <BatchTable />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}

export default App;
