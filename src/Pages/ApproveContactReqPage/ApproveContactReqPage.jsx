import SectionHeader from "../../Components/SectionHeader/SectionHeader"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ApproveConReqRow from "./ApproveConReqRow";
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import Swal from "sweetalert2";


const ApproveContactReqPage = () => {

  const secureAxios = useSecureAxios()
  const { loader } = useContext(AuthContext)


  const { data: allReqData = [], refetch } = useQuery({
    queryKey: ['adminConReq'],
    enabled: !loader,
    queryFn: async () => {
      const res = await secureAxios.get('/allConReq');
      return res.data;
    }
  })

  const handleApprove = (sid) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios.patch(`/updateReq/${sid}`)
          .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch()
            }
          })
      }
    });
  }

  return (
    <div>
      <SectionHeader big={'Approve Req Contact Page'} small={'admin can make user premium from here'} />
      <div className=' px-4 py-10 max-w-6xl mx-auto'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, background: '#e9e9e9' }} aria-label="caption table">
            <TableHead sx={{ background: 'pink' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>User Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">User Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">User Biodata Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Approve Contact Req</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allReqData?.map((row) => <ApproveConReqRow handleApprove={handleApprove} key={row._id} data={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default ApproveContactReqPage;