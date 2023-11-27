'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Characters } from '@/app/interfaces/CharacterResponse.interface';

export default function Characters() {
  const apiUrl: string = 'https://rickandmortyapi.com/api';
  const [characters, setCharacters] = useState<Characters | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/character`);
        const data: Characters = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <section className="grid grid-cols-2 mt-6">
      {characters &&
        characters.results.map((character) => (
          <div key={character.id} className="flex h-[216px] w-[392px] m-2 bg-white/10 p-4 rounded-md">
            <Image
							style={{width: 180, height: 180}}
              alt={character.name}
              width={180}
              height={180}
              src={character.image}
            />
            <ul className="ml-3">
              <li className="text-2xl font-medium">{character.name}</li>
              <li className="mt-2">
                {character.status} - {character.species}
              </li>
              <li className="mt-2">
                <span className="text-sm text-slate-400">Ultima ubicación:</span>
                <br />
                <span>{character.location.name}</span>
              </li>
              <li className="mt-2">
                <span className="text-sm text-slate-400">Visto por primera vez en:</span>
                <br />
                <span>{character.origin.name}</span>
              </li>
            </ul>
          </div>
        ))}
    </section>
  );
}
