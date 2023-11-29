'use client'

//React
import { useEffect, useState } from 'react';
//Next
import Image from 'next/image';
//App
import { Characters } from '@/app/interfaces/CharacterResponse.interface';
//Icons
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

//Packages
import toast, { Toaster } from 'react-hot-toast';

export default function Characters({ search }) {
  const apiUrl: string = 'https://rickandmortyapi.com/api';
  const [characters, setCharacters] = useState<Characters | null>(null);

  useEffect(() => {
    const fetchData = async () => { //Fetch the API
      try {
        const response = await fetch(`${apiUrl}/character`);
        const data: Characters = await response.json();
        setCharacters(data);
      } catch (error) { //Manage error
        toast.error("Ups... Ha ocurrido in error")
      }
    };
    fetchData();
  }, []); 

  const filteredCharacters = characters
  ? characters.results.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase()) 
    )
  : [];

  return (
    <>
    <div><Toaster position='bottom-left'/></div>
    <div className='mt-4 w-1/3 flex justify-center p-1'>
      <ul className='flex justify-center items-center text-lg'>
        <li className='mr-2'><FaArrowCircleLeft/></li>
        <li>1</li>
        <li className='ml-2'><FaArrowCircleRight/></li>
      </ul>
    </div>
    <section className="md:grid flex flex-wrap md:grid-cols-2">
      { filteredCharacters.map((character) => (
          <div key={character.id} className="flex bg-white/10 p-4 m-2 min-w-[460px]">
            <Image
              priority
							style={{width: 180, height: 180}}
              alt={character.name}
              width={180}
              height={180}
              src={character.image}
            />
            <ul className="ml-3">
              <li className="text-2xl font-medium">{character.name}</li>
              <li className="mt-2">
                {character.status === 'Alive' ? `🟢${character.status}` : 
                 character.status === 'unknown' ? `${character.status}` : 
                `🔴${character.status}`} - {character.species}
              </li>
              <li className="mt-2">
                <small className="text-sm text-slate-400">Ultima ubicación:</small>
                <br />
                <span>{character.location.name}</span>
              </li>
              <li className="mt-2">
                <small className="text-sm text-slate-400">Visto por primera vez en:</small>
                <br />
                <span>{character.origin.name}</span>
              </li>
            </ul>
          </div>
        ))}
    </section>
    </>
  );
}
