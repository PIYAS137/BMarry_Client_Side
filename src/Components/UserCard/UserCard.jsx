import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const UserCard = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 300, background: '#ffa0d0', marginBottom: '1.2rem', borderRadius: '1rem' }}>
            <CardActionArea sx={{ background: 'pink',cursor:'auto' }}>
                <div className=' max-h-[330px] overflow-hidden'>
                    <img src={data.biodata_image} className='object-cover w-full h-full' alt="" />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="p" sx={{ fontWeight: 'bold' }} component="div">
                        <p className=' text-center'>{data.name}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div className='flex justify-between font-bold'>
                            <h1>Age : {data.age} Years</h1>
                            <p>Biodata Id : {data.biodata_id}</p>
                        </div>
                        <div className=' flex justify-between'>
                            <h1>Gender : {data.gender}</h1>
                            <h1>Occupation : {data.occupation}</h1>
                        </div>
                        <h1 className=' text-center'>Permanent Division : {data.parmanent_address}</h1>

                    </Typography>
                </CardContent>
            </CardActionArea>
            <div>
                <div className=' flex justify-center my-2'>
                    <Link to={`/biodatas/${data._id}`}>
                    <button className=' px-5 py-2 text-sm bg-purple-400 text-white rounded-lg'>View Profile</button>
                    </Link>
                </div>
            </div>
        </Card>
    )
}

export default UserCard;