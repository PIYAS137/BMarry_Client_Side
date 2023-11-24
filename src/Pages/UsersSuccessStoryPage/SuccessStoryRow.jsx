import { TableCell, TableRow } from "@mui/material"

const SuccessStoryRow = ({ data }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {data.name}
            </TableCell>
            <TableCell align="center">
                <span>123</span>
            </TableCell>
            <TableCell align="center">{data.email}</TableCell>
            <TableCell align="center">
                <span>123</span>
            </TableCell>
            <TableCell align="center">
                <button className=" py-2 px-4 text-xs bg-pink-400 text-white rounded-lg">View Story</button>
            </TableCell>
        </TableRow>
    )
}

export default SuccessStoryRow