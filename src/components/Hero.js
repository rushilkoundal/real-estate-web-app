import { Typography } from '@mui/material'
import React from 'react'

function Hero() {
    const styleStatR = {
        width: '10vw',
        background: '#fff',
        paddingLeft: '10px',
        borderRadius: '10px',
        color: '#5554C2'
    }

    const styleStatP = {
        width: '10vw',
        background: '#fff',
        paddingLeft: '10px',
        borderRadius: '10px',
        color: '#5554C2',
        marginLeft: '10px'
    }

    const styleHero = {
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: '0',
        top: '10vh',
    }

    return (
        <div className='hero' style={styleHero}>
            <div className="hero_text" style={{ width: '400px', marginRight: '80px' }}>
                <Typography variant='h3' style={{fontWeight: 'bold'}}>Buy, sell, or rent your property easily</Typography>
                <Typography variant='h6' mt={2}>A great place to buy, sell or even rent your property without any commision</Typography>
                <div style={{ display: 'flex', marginTop: '10px' }} className="property_stat">
                    <div style={styleStatR}>
                        <Typography variant='button' display='block'>50K+</Typography>
                        <Typography variant='overline'>Renters</Typography>
                    </div>
                    <div style={styleStatP}>
                        <Typography variant='button' display='block'>10K+</Typography>
                        <Typography variant='overline'>Properties</Typography>
                    </div>
                </div>
            </div>
            <div style={{ height: '90vh', width: '50vw', background: 'grey' }} className="img">
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80" alt="img" />
            </div>
        </div>
    )
}

export default Hero