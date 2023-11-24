import SectionHeader from "../../Components/SectionHeader/SectionHeader"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SuccessStoryRow from "./SuccessStoryRow";

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

const UsersSuccessStoryPage = () => {
    return (
        <div>
            <SectionHeader small={'all users success storys is here'} big={'Users Success Story'} />
            <div className=' px-4 py-10 max-w-6xl mx-auto'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, background: '#e9e9e9' }} aria-label="caption table">
                        <TableHead sx={{ background: 'pink' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Male User Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align="center">Male User Biodata Id</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align="center">Female User Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align="center">Female User Biodata Id</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align="center">Make Premium</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas.map((row, i) => <SuccessStoryRow key={i} data={row} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default UsersSuccessStoryPage