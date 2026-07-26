import type { Character } from '../global/types.ts';

/**
 * Gets a random Character object from `characters.json` dataset.
 */
async function getRandomCharacter() {
  const response = await fetch('./characters.json');
  const characters = (await response.json()) as Character[];

  // Source - https://stackoverflow.com/a/4550514
  // Posted by Jacob Relkin, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-07-26, License - CC BY-SA 4.0
  return characters[Math.floor(Math.random() * characters.length)];
}

export default getRandomCharacter;
