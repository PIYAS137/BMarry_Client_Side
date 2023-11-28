import SectionHeader from "../../Components/SectionHeader/SectionHeader"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SuccessStoryRow from "./SuccessStoryRow";
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseAuthContext";

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


    const secureAxios = useSecureAxios();
    const { loader } = useContext(AuthContext);

    const {data : getSuccessStorys = []} = useQuery({
        queryKey : ['loadAllSuccess'],
        enabled : !loader,
        queryFn : async ()=>{
            const res = await secureAxios.get('/getSuccess');
            return res.data;
        }
    })
    console.log(getSuccessStorys);



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
                                <TableCell sx={{ fontWeight: 'bold' }} align="center">View Story</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {getSuccessStorys?.map((row) => <SuccessStoryRow key={row._id} data={row} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default UsersSuccessStoryPage