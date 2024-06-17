import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/appSlices.jsx';
import pokemonReducer from './slices/pokemonSlices.jsx';
export const store = configureStore({
  reducer: {
    app: appSlice,
    pokemon: pokemonReducer,

  },
})