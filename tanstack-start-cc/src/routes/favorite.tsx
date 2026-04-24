import { saveFavoritePokemonFn } from '#/server/pokemon';
import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start';
import { useState } from 'react';

export const Route = createFileRoute('/favorite')({
  component: FavoritePage,
})

function FavoritePage() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const savePokemon = useServerFn(saveFavoritePokemonFn);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');
    
    await savePokemon({data:name});

    setStatus(`Saved ${name} as a favorite Pokemon!`);
    setName('');
  }

  return (
    <main className='page-wrap px-4 pb-8 pt-14'>
      <h1>Save a Pokemon</h1>
     <form onSubmit={handleSubmit}>
      <input type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      className='border rounded-md p-2'
      placeholder='Enter Pokemon name'
      />
      <button type="submit" className='bg-blue-500 text-white rounded-md p-2'>Save</button>
     </form>
     <p className='mt-4 '>{status}</p>
    </main>
  );
}
