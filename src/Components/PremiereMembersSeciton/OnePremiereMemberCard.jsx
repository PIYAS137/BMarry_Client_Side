import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

import { useMotionValue, motion, useTransform } from 'framer-motion'

const OnePremiereMemberCard = ({ data }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [100, -100], [-30, 30])



    return (
        <div style={{ perspective: 2000 }}>
            <motion.div style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}>
                <Card sx={{ maxWidth: 400, marginBottom: '3rem', borderRadius: '1rem', background: '#ffa0d0',cursor:"grab" }}>
                    <CardActionArea sx={{ background: 'pink' }}>
                        <motion.div style={{ x, y, rotateX, rotateY, z: 100000 }} className=' max-h-[500px] rounded-t-xl overflow-hidden'>
                            <img draggable='false' src={data.biodata_image} className='object-cover w-full h-full' alt="" />
                        </motion.div>
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
            </motion.div>
        </div>
    )
}

export default OnePremiereMemberCard