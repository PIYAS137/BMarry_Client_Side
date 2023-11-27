import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OneRow from './OneRow';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/FirebaseAuthContext';
import useSecureAxios from '../../hooks/secureAxiosDataFetchHook/useSecureAxios';
import Swal from 'sweetalert2';

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


const MyContactRequest = () => {

  const { user, loader } = React.useContext(AuthContext)
  const secureAxios = useSecureAxios()

  const { data: userReqs = [], refetch } = useQuery({
    queryKey: ['usersReqContact'],
    enabled: !loader,
    queryFn: async () => {
      const res = await secureAxios.get(`/payment/${user?.email}`)
      return res.data
    }
  })
  console.log(userReqs);

  const handleDeleteReq = (bid) => {
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

        secureAxios.delete(`/deleteReq/${bid}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Deleted",
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
            }
          })
      }
    });
  }




  return (
    <div>
      <div>
        <SectionHeader small={'View your reqests'} big={"My Contact Request"} />
      </div>
      <div className=' px-4 max-w-6xl mx-auto'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, background: '#e9e9e9' }} aria-label="caption table">
            <TableHead sx={{ background: 'pink' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>His / Her Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">His / Her Biodata Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">His / Her Phone</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">His / Her Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Action</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userReqs?.map((row) => <OneRow handleDeleteReq={handleDeleteReq} key={row._id} data={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {
        userReqs.length == 0 && <p className=' bg-red-100 max-w-lg mx-auto my-2 text-red-500 font-bold p-3 text-center rounded-lg'>You not added any request</p>
      }
    </div>
  );
}

export default MyContactRequest