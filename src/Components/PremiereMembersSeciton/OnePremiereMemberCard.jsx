import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const OnePremiereMemberCard = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 400, marginBottom: '3rem', borderRadius: '1rem', background: '#ffa0d0' }}>
            <CardActionArea sx={{ background: 'pink' }}>
                <div className=' max-h-[500px] overflow-hidden'>
                    <img src={data.biodata_image} className='object-cover w-full h-full' alt="" />
                </div>
                <CardContent>
                    <Typography gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }} variant="h6" component="div">
                        Biodata ID : {data.biodata_id}
                    </Typography>


                    <div className=' flex justify-around'>
                        <Typography gutterBottom component="div">
                            AGE : {data.age}
                        </Typography>
                        <Typography gutterBottom component="div">
                            Occupation : <span className=' capitalize'>{data.occupation}</span>
                        </Typography>
                    </div>


                    <div className=' flex justify-around'>
                        <Typography gutterBottom component="div">
                            Gender : <span className=' capitalize'>{data.gender}</span>
                        </Typography>
                        <Typography gutterBottom component="div">
                            Permanent Address : <span className=' capitalize'>{data.parmanent_address}</span>
                        </Typography>
                    </div>


                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`/biodatas/${data._id}`}>
                    <Button variant="contained" disableElevation>
                        View Biodata
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default OnePremiereMemberCard