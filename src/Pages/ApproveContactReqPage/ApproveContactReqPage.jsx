import SectionHeader from "../../Components/SectionHeader/SectionHeader"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ApproveConReqRow from "./ApproveConReqRow";

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

const ApproveContactReqPage = () => {
  return (
    <div>
      <SectionHeader big={'Approve Req Contact Page'} small={'admin can make user premium from here'} />
      <div className=' px-4 py-10 max-w-6xl mx-auto'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, background: '#e9e9e9' }} aria-label="caption table">
            <TableHead sx={{background:'pink'}}>
              <TableRow>
                <TableCell sx={{fontWeight:'bold'}}>User Name</TableCell>
                <TableCell sx={{fontWeight:'bold'}} align="center">User Email</TableCell>
                <TableCell sx={{fontWeight:'bold'}} align="center">User Biodata Id</TableCell>
                <TableCell sx={{fontWeight:'bold'}} align="center">Approve Contact Req</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((row, i) => <ApproveConReqRow key={i} data={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default ApproveContactReqPage;