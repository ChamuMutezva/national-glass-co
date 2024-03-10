import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, quantity, measure, percentage) {
    return { name, quantity, measure, percentage };
}

const rows = [
    createData("Toughened", 37.9, "kg", 270.12),
    createData("Broken", 104, "Kg", 0, "%"),
    createData("Available", 258.27, "Kg", Infinity),
    createData("Idle", 205.38, "min", 207.69),
];

export default function OneDay() {
    return (
        <TableContainer component={Paper} elevation={6}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Day</TableCell>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.measure}</TableCell>
                            <TableCell align="right">
                                {row.percentage}%
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
