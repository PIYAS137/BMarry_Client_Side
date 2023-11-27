import { TableCell, TableRow } from "@mui/material"


const PremiumRow = ({ data , handleClickMakePremium}) => {
    console.log(data);
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {data.senderName}
            </TableCell>
            <TableCell align="center">{data.senderEmail}</TableCell>
            <TableCell align="center">
                <span>{data.senderBiodataId}</span>
            </TableCell>
            <TableCell align="center">
                <button onClick={()=>handleClickMakePremium(data.senderEmail)} className=" py-2 px-4 text-xs bg-purple-600 text-white rounded-lg">Make Premium</button>
            </TableCell>
        </TableRow>
    )
}

export default PremiumRow