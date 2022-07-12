import { InputBase, Paper, Typography } from '@mui/material'
import { useState, useEffect} from 'react'
import { baseUrl, fetchApi } from '../fetchApi'
import RentList from './RentList'
import SearchFilters from './SearchFilters';

function Rent() {
    const [rent, setRent] = useState([]);
    const [search, setSearch] = useState('');
    const [searchBar, setSearchBar] = useState('');

    useEffect(() => {
        async function getData() {
            const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
            setRent(propertyForRent.hits)
            console.log(propertyForRent);
        }
        getData();
    }, [])

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
            <div className="search" style={{padding: '0 10% '}}><SearchFilters setSearch={setSearch} /></div>
            <div className="ren_property" style={{display: 'grid', justifyContent: 'space-evenly', gridTemplateColumns: 'repeat(3, minmax(9%,1fr))', padding: '0 10%'}}>
                {rent?.filter((property) => {
                    let propertySearch = JSON.stringify(property);
                    // return search == '' || propertySearch.toLowerCase().includes(search.toLowerCase())
                    if (search === '') return property
                    else return propertySearch.includes(search)
                    // if (searchBar === '') return property
                    // else if (property?.name.toLowerCase().includes(searchBar.toLowerCase())) return property
                }).map((rent) => (
                    <RentList key={rent.id} title={rent.title} img={rent.coverPhoto.url} price={rent.price} room={rent.rooms} bath={rent.baths} area={rent.area} rentFrequency={rent.rentFrequency}/>
                ))}
            </div>
        </div>
    )
}

export default Rent