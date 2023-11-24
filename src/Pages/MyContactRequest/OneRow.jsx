import { TableCell, TableRow } from "@mui/material";




const OneRow = ({data}) => {
    return (
        
            <TableRow>
                <TableCell component="th" scope="row">
                    {data.name}
                </TableCell>
                <TableCell align="center">{data.id}</TableCell>
                <TableCell align="center">{data.phone}</TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell align="center">
                    <button className=" py-2 px-4 text-xs bg-red-500 text-white rounded-lg">Delete</button>
                </TableCell>
                <TableCell align="left">
                    <span className=" text-purple-700 font-bold">pending</span>
                    {/* <span className=" text-green-600 font-bold">accepted</span> */}
                </TableCell>
            </TableRow>
        
    )
}

export default OneRow