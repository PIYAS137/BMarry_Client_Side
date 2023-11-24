import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import FavDatasRow from './FavDatasRow';

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


const FavBioDataPage = () => {
  return (
    <div>
      <div>
        <SectionHeader small={'View your favourte biodatas'} big={"My Favourite Biodata"}/>
      </div>
      <div className=' px-4'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650,background:'#e9e9e9' }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>His / Her Name</TableCell>
                <TableCell align="center">His / Her Biodata Id</TableCell>
                <TableCell align="center">His / Her Permanent Address</TableCell>
                <TableCell align="center">His / Her Email</TableCell>
                <TableCell align="center">His / Her Occupation</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((row, i) => <FavDatasRow key={i} data={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default FavBioDataPage;