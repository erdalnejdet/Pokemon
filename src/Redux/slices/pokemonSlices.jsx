import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    pokemons: [],
    loading: false,
    allPokemons: [],
    length : []
};

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'; 

export const getAllPokemon = createAsyncThunk("pokemon/getAllPokemon", async () => {
    const response = await axios.get(`${BASE_URL}?limit=100`);

    return response.data;
  

});


export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        searchPokemon: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            
            // İstek başladığında loading true yapalım
            state.loading = true;
        
            // Eğer searchTerm boş ise, tüm pokemons listesini geri yükle
            if (searchTerm === '') {
                state.pokemons = [...state.allPokemons];
            } else {
                // Pokémons listesini filtreleyelim
                state.pokemons = state.allPokemons.filter(pokemon =>
                    pokemon.name.includes(searchTerm)
                );
            }
        
            // İstek tamamlandığında loading false yapalım
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPokemon.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllPokemon.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemons = action.payload.results;
            state.allPokemons = action.payload.results; // tüm pokemons'u allPokemons'a ata
        });
        builder.addCase(getAllPokemon.rejected, (state) => {
            state.loading = false;
        });
    }

    
});

export const { searchPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
