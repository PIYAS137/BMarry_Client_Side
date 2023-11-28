import SectionHeader from "../../Components/SectionHeader/SectionHeader"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PremiumRow from "./PremiumRow";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import Swal from "sweetalert2";


const ApprovePremiumPage = () => {

  const secureAxios = useSecureAxios();
  const { loader } = useContext(AuthContext)

  const { data: premiumReqs = [], refetch } = useQuery({
    queryKey: ['getAllPremiumReq'],
    enabled: !loader,
    queryFn: async () => {
      const res = await secureAxios.get('/premium')
      return res.data;
    }
  })

  const handleClickMakePremium = (email) => {
    Swal.fire({
      title: "Want to make premium ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!"
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios.patch(`/premium/${email}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Successfully Updated !",
                text: "Your file has been updated.",
                icon: "success"
              });
            }
          })
      }
    });
  }



  return (
    <div>
      <SectionHeader big={'Approve Premium Page'} small={'admin can make user premium from here'} />
      <div className=' px-4 py-10 max-w-6xl mx-auto'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, background: '#e9e9e9' }} aria-label="caption table">
            <TableHead sx={{ background: 'pink' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>User Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">User Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">User Biodata Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Make Premium</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {premiumReqs?.map((row) => <PremiumRow handleClickMakePremium={handleClickMakePremium} key={row._id} data={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default ApprovePremiumPage