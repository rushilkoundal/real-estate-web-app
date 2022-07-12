import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    const styleLink = {
        cursor: 'pointer',
        color: '#000'
    }
    return (
        <>
            <div style={{ background: 'whitesmoke', height: '10vh', display: 'flex', alignItems: 'center', padding: '0 5%'}} className='navbar'>
                <div style={{ display: 'flex', alignItems: 'center' }} className="logo">
                    <OtherHousesRoundedIcon fontSize='large' style={{ color: '#5554C2' }} />
                    <Link to='/'><Typography style={{fontWeight: 'bold'}} variant='h4' ml={1} color='#5554C2'>RealEstate</Typography></Link>
                </div>
                <div style={{ marginLeft: '50px' }} className="nav_links">
                    <Link to='/property=rent'><Typography variant='button' style={styleLink}>Rent</Typography></Link>
                </div>
            </div>
            <Divider variant='middle'/>
        </>
    )
}

export default Navbar