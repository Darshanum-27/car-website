import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function VehicleTable(props) {
    const rows = [
        createData('Model', props.data.name),
        createData('Mark', props.data.mark),
        createData('Year', props.data.year),
        createData('Doors', props.data.doors),
        createData('AC', props.data.ac),
        createData('Transmission', props.data.transmission),
        createData('Fuel', props.data.fuel),
        createData('Cost', props.data.cost),
      ];
  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 200 }}>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}