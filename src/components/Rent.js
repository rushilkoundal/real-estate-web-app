import { InputBase, Paper, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { baseUrl, fetchApi } from '../fetchApi'
import RentList from './RentList'
import SearchFilters from './SearchFilters';
import { BounceLoader } from 'react-spinners';

function Rent() {
    const [rent, setRent] = useState([]);
    const [search, setSearch] = useState('');
    const [searchBar, setSearchBar] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
            setRent(propertyForRent.hits)
            console.log(propertyForRent);
            setLoading(false);
        }
        getData();
    }, [])

    const override = {
        display: "block",
        margin: "100px auto",
        borderColor: "#5554C2",
    };

    return (
        <div className='rent'>
            <div className="search" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2% 10%' }}>
                <Typography variant='h3' style={{ fontWeight: 'bold' }}>Search properties to rent</Typography>
                <Paper component='form' style={{ padding: '2px 10px', width: 200, boxShadow: 'none' }}>
                    <InputBase
                        style={{ ml: 1, flex: 1 }}
                        placeholder="Search Property"
                        inputProps={{ 'aria-label': 'search property' }}
                        onChange={(e) => setSearchBar(e.target.value)}
                    />
                </Paper>
            </div>
            <div className="search" style={{ padding: '0 10% ' }}><SearchFilters setSearch={setSearch} /></div>
            {loading ? (
                <BounceLoader color='#5554C2' loading={loading} cssOverride={override} size={60}/>
            ) : (
                <div className="ren_property" style={{ padding: '0 10%', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                {rent?.filter((property) => {
                    let propertySearch = JSON.stringify(property);
                    // return search == '' || propertySearch.toLowerCase().includes(search.toLowerCase())
                    if (search === '') return property
                    else return propertySearch.includes(search)
                    // if (searchBar === '') return property
                    // else if (property?.name.toLowerCase().includes(searchBar.toLowerCase())) return property
                }).map((rent) => (
                    <RentList key={rent.id} title={rent.title} img={rent.coverPhoto.url} price={rent.price} room={rent.rooms} bath={rent.baths} area={rent.area} rentFrequency={rent.rentFrequency} />
                ))}
            </div>
            )}
        </div>
    )
}

export default Rent