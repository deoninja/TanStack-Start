import { createServerFn } from "@tanstack/react-start";

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = createServerFn({method: 'GET'}).handler(async () => {
    console.log('Executing a secure database/API call on the server.....');
  
        const response = await fetch(POKE_API_URL);
        // throw new Error('Failed to load Pokemon data'); // Simulate an error for testing
        const data = await response.json();
        
        console.log('Data successfully fetched on the server!');
        return data;
      },

    );

export const saveFavoritePokemonFn = createServerFn({ method: 'POST' })
.inputValidator((name: string) => name)
.handler(async ({data}) => {
    console.log('Saving data to our secure database...');

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for saving data

    return { success: true, saved: data };
});