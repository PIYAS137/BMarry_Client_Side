import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

const ExpandMore = styled((props) => {
    const { ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const SuccessStoryCard = ({ data }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, background: 'pink', borderRadius: '1rem', marginBottom:'2rem' }}>
            <CardHeader
                sx={{ textAlign: 'center' }}
                subheader={data.marriage_date}
            />
            <div className=' max-h-[400px] overflow-hidden'>
                <img src={data.couple_image_link} className='object-cover w-full h-full' alt="" />
            </div>
            <CardContent>
                <Typography sx={{fontWeight:'bold', textAlign:'center', display:'block'}} variant="caption" color="text.secondary">
                    {`${data.self_name} & ${data.partner_name}`}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', padding:'0rem 0rem 0rem 1rem' }}>
                    Rating   {data.rating}
                </Typography>
                <IconButton aria-label="add to favorites">
                    <StarIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Story :</Typography>
                    <Typography paragraph>
                        {data.success_story}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default SuccessStoryCard;
