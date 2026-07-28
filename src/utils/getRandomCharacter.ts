import type { Character } from '../global/types.ts';

let cachedCharacters: Character[] | null = null;

async function getRandomCharacter() {
  if (!cachedCharacters) {
    const response = await fetch('./characters.json');
    cachedCharacters = (await response.json()) as Character[];
  }

  // Source - https://stackoverflow.com/a/4550514
  // Posted by Jacob Relkin, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-07-26, License - CC BY-SA 4.0
  return cachedCharacters[Math.floor(Math.random() * cachedCharacters.length)];
}

export default getRandomCharacter;
