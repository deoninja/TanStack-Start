import SkillCard from '#/components/SkillCard';
import { createFileRoute } from '@tanstack/react-router';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const Route = createFileRoute('/')({ component: App,

  pendingComponent: () => (<div className='p-14 text-center text-shadow-amber-50'>Loading Pokemon...</div>),
  pendingMs: 300,

  loader: async () => {
    // const skills = await fetch('/api/skills').then(res => res.json());
    // return { skills };
    // console.log('Loading data for "/" route...');
    const response = await fetch(POKE_API_URL);
    const data = await response.json();
    console.log('Loading data for "/" route...', data);
    return data;
  }
 });

function App() {
  const data = Route.useLoaderData();
  return (
    <main className='page-wrap px-4 pb-8 pt-14'>
      <h1 className='text-3xl font-bold'>Hello, world!</h1>

      <ul className='mt-6 list-none p-0 space-y-5'>
        {data.results.map((pokemon: { name: string }) => (
          <li key={pokemon.name}>
            <SkillCard name={pokemon.name} />
          </li>
        ))} 
      </ul>

      {/* <ul className='mt-6 list-none p-0 space-y-5'>
        <li>
          <SkillCard name='TanStack Start' />
        </li>
        <li>
          <SkillCard name='TypeScript' />
        </li>
        <li>
          <SkillCard name='MongoDB' />
        </li>
      </ul> */}
    </main>
  );
}
