import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { filterData } from '../filterData';
import { Box } from '@mui/system';
import { useState } from 'react';

function SearchFilters({ setSearch }) {
    const [filters] = useState(filterData);

    return (
        <div className='searchFilters' style={{ display: 'flex', justifyContent: 'space-evenly', padding: '10px', background: '#fff' }}>
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <FormControl>
                        <InputLabel>{filter.placeholder}</InputLabel>
                        <Select style={{ width: 200, outline: 'none' }} label={filter.placeholder} onChange={(e) => setSearch(e.target.value)}>
                            {filter?.items.map((item) => (
                                <MenuItem value={item.value} key={item.value}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            ))}
        </div>
    )
}

export default SearchFilters