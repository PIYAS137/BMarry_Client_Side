import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import ManageTableRow from './ManageTableRow';

const datas = [
    {
        name: 'piyas',
        id: 12,
        phone: 123,
        email: 'asdfasf'
    },
    {
        name: 'piyas',
        id: 13,
        phone: 123,
        email: 'asdfasf'
    }
]


const ManageUserTable = () => {
    return (
        <>
            <div className=' px-4 py-10'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, background: '#e9e9e9' }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User Name</TableCell>
                                <TableCell align="center">User Email</TableCell>
                                <TableCell align="center">Make Admin</TableCell>
                                <TableCell align="center">Make Premium</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas.map((row, i) => <ManageTableRow key={i} data={row} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default ManageUserTable