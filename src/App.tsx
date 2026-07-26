import { useEffect, useState } from 'react';
import {
  mdiAlphaXCircle,
  mdiCodeJson,
  mdiFormatListNumbered,
  mdiImageSearchOutline,
  mdiOpenInNew,
  mdiRefresh,
  mdiStar,
} from '@mdi/js';
import { Icon } from '@mdi/react';
import Invertocat from './assets/GitHub_Invertocat_Black.svg';
import { ListEntry } from './components/ListEntry.tsx';
import type { Character } from './global/types.ts';
import getRandomCharacter from './utils/getRandomCharacter.ts';

function App() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<boolean>(false);

  const newCharacter = () => {
    getRandomCharacter()
      .then((character) => setCharacter(character))
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  };

  useEffect(() => {
    newCharacter();
  }, []);

  return (
    <main className='w-full min-h-screen sm:flex flex-col items-center justify-center'>
      <div className='w-full sm:w-auto sm:p-5'>
        <section>
          <div className='card bg-base-200 shadow-sm sm:w-md rounded-none sm:rounded-lg'>
            <figure>
              {error ? (
                <div className='h-[225px] h-full w-full flex justify-center items-center text-center'>
                  <div>
                    <Icon path={mdiAlphaXCircle} size={12} />
                    <div className='font-bold text-error'>
                      Something went wrong!
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={character?.imageUrl}
                  alt={character?.name}
                  width='225'
                  height='350'
                  className='w-full max-h-[500px] object-cover'
                />
              )}
            </figure>
            <div className='card-body'>
              <h1 className='card-title text-2xl mb-2'>{character?.name}</h1>
              <ul className='gap-3 text-base-content'>
                {/* Rank & Favorites */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  <ListEntry
                    label='Rank'
                    value={character?.rank.toString() ?? 'N/A'}
                    icon={mdiFormatListNumbered}
                  />
                  <ListEntry
                    label='Favorites'
                    value={character?.favorites?.toLocaleString() ?? '0'}
                    icon={mdiStar}
                  />
                </div>

                {/* Source */}
                <div className='mt-2'>
                  <ListEntry
                    label='Source'
                    value={character?.animeography[0] ?? 'None'}
                    icon={mdiImageSearchOutline}
                  />
                </div>
              </ul>

              {/* External Link */}
              {!error && (
                <a
                  href={character?.malURL}
                  target='_blank'
                  className='btn btn-primary btn-outline w-full'
                >
                  View on MyAnimeList <Icon path={mdiOpenInNew} size={1} />{' '}
                </a>
              )}
            </div>
          </div>

          {/* New Character */}
          <div className='flex justify-center mt-5'>
            <button onClick={newCharacter} className='btn btn-primary'>
              <Icon path={mdiRefresh} size={1} /> New Character
            </button>
          </div>
        </section>

        <section className='mt-8 mb-8 opacity-70'>
          <div className='flex justify-center'>
            <div className='flex justify-between gap-5 max-w-56'>
              <a href='https://github.com' target='_blank'>
                <img src={Invertocat} alt='GitHub' className='size-6' />
              </a>
              <a href='/characters.json' target='_blank'>
                <Icon path={mdiCodeJson} className='text-white size-6' />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
