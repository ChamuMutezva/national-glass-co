import { Container, Grid } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OneDay from "./period/OneDay";
import SevenDays from "./period/SevenDays";
import Month from "./period/Month";

function ProgressDetails() {
    const [location, setLocation] = useState("");
    const handleChange = (evt) => {
        setLocation(evt.target.value);
    };
    return (
        <Container
            component={Grid}
            gap={4}
            style={{
                maxWidth: "100%", // Override the default max-width
                padding: 0, // Remove default padding if needed
            }}
        >
            <FormControl fullWidth component={Grid} item>
                <InputLabel id="location-label">Warehouse</InputLabel>
                <Select
                    labelId="location-label"
                    id="location-select"
                    value={location}
                    label="Warehouse"
                    defaultValue="port-elizabeth"
                    onChange={handleChange}
                >
                    <MenuItem value={"johhanesburg"}>JB</MenuItem>
                    <MenuItem value={"port-elizabeth"}>PE</MenuItem>
                    <MenuItem value={"cape-town"}>CT</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={2}>
                <OneDay />
                <SevenDays />
                <Month />
            </Grid>
        </Container>
    );
}

export default ProgressDetails;
