import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import BedIcon from '@mui/icons-material/Bed';
import ShowerRoundedIcon from '@mui/icons-material/ShowerRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

function RentList({ title, img, price, room, bath, area, rentFrequency }) {
    const styleStat = {
        display: 'flex',
        alignItems: 'center'
    }
    const styleIcon = {
        color: '#5554C2'
    }

    return (
        <div className='rentList'>
            <Card style={{ maxWidth: 345, margin: '10px 0' }}>
                <CardMedia component='img' height='194' image={img} />
                <CardContent>
                    <Typography variant='h6' style={{ fontWeight: 'bold', color: '#5554C2' }}>${price}<Typography color='#000' variant='caption'>/{rentFrequency}</Typography></Typography>
                    <Typography variant="subtitle1" color="text.secondary" style={{ fontWeight: 'bold', lineHeight: '1rem', color: '#000', marginBottom: '10px' }}>
                        {title}
                    </Typography>
                    <Divider />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '10px' }}>
                        <Typography style={styleStat} variant='subtitle1'><BedIcon style={styleIcon} />{room}</Typography>
                        <Typography style={styleStat} variant='subtitle1'><ShowerRoundedIcon style={styleIcon} />{bath}</Typography>
                        <Typography style={styleStat} variant='subtitle1'><GridViewRoundedIcon style={styleIcon} />{Math.floor(area)}mt.sqr</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default RentList