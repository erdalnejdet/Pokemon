import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon } from '../Redux/slices/pokemonSlices';

function PokemonCards() {
  const dispatch = useDispatch();
  const { pokemons, loading, } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);


  return (
    <div className='pt-10'>
      <div className='pt-10'>
      Toplam Pokemon Sayısı: {pokemons.length}

      </div>
      <Grid container spacing={3} justifyContent="center">
        {pokemons && pokemons.map((pokemon, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={pokemon.name}
                height="140"
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              />
              <CardContent>
                <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PokemonCards;
