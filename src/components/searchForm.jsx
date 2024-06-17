import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { searchPokemon } from '../Redux/slices/pokemonSlices';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        dispatch(searchPokemon(searchTerm));
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value === '') {
            dispatch(searchPokemon(''));
        }
    };

    return (
        <Grid className='pt-10' style={{ alignItems: 'center' }} container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
                <TextField
                    label="Arama yapın"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSearch}
                >
                    Ara
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchForm;
