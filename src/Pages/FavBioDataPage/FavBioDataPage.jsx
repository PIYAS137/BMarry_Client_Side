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
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/FirebaseAuthContext';
import usePublicAxiosHook from '../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook';




const FavBioDataPage = () => {

  const { user } = React.useContext(AuthContext);
  const publicAxios = usePublicAxiosHook();



  const {refetch, data : myFavDatas = []} = useQuery({
    queryKey: ['getMyFavInfo'],
    queryFn: async()=>{
      const res = await publicAxios.get(`/myFavs/${user?.email}`)
      return res.data;
    }
  })
  console.log(myFavDatas);



  return (
    <div>
      <div>
        <SectionHeader small={'View your favourte biodatas'} big={"My Favourite Biodata"} />
      </div>
      <div className=' px-4 max-w-6xl mx-auto'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, background: '#e9e9e9' }} aria-label="caption table">
            <TableHead sx={{background:'pink'}}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>His / Her Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">His / Her Biodata Id</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">His / Her Permanent Address</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">His / Her Occupation</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">View</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myFavDatas?.map((row) => <FavDatasRow key={row._id} refetch={refetch} data={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default FavBioDataPage;