import SkillCard from '#/components/SkillCard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <main className='page-wrap px-4 pb-8 pt-14'>
      <h1 className='text-3xl font-bold'>Hello, world!</h1>

      <ul>
        <li>
          <SkillCard name='TanStack Start' />
        </li>
        <li>
          <SkillCard name='TypeScript' />
        </li>
        <li>
          <SkillCard name='MongoDB' />
        </li>
      </ul>
    </main>
  );
}
