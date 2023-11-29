'use client'

//React
import { useEffect, useState } from 'react';
//Next
import Image from 'next/image';
import Link from 'next/link'
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
  const [page, setPage] = useState(1)
  useEffect(() => {
    const fetchData = async () => { //Fetch the API
      try {
        const response = await fetch(`${apiUrl}/character/?page=${page}`);
        const data: Characters = await response.json();
        setCharacters(data);
      } catch (error) { //Manage error
        toast.error("Ups... Ha ocurrido in error")
      }
    };
    fetchData();
  }, [page]); 

  const handleNextPage = () => {
    let maxPage = characters.info.pages
    if(page === maxPage) return
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    if(page === 1) return
    setPage(page - 1)
  }

  const handleLastPage = () => {
    if(page === characters.info.pages) return
    setPage(characters.info.pages)
  } 

  const handleFirstPage = () => {
    if(page === 1) return
    setPage(1)
  } 

  const filteredCharacters = characters
  ? characters.results.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase()) 
    )
  : [];

  return (
    <>
    <div><Toaster position='bottom-left'/></div>
    <div className='mt-4 full flex justify-center p-1'>
      <ul className='flex justify-center items-center text-lg select-none'>
        <li className='mr-3 cursor-pointer' onClick={handleFirstPage}>{'<<'}</li>
        <li className='mr-2 cursor-pointer' onClick={handlePrevPage}><FaArrowCircleLeft/></li>
        <li>{`${page} - ${characters?.info.pages}`}</li>
        <li className='ml-2 cursor-pointer' onClick={handleNextPage}><FaArrowCircleRight/></li>
        <li className='ml-3 cursor-pointer' onClick={handleLastPage}>{'>>'}</li>
      </ul>
    </div>
    <section className="md:grid flex flex-wrap md:grid-cols-2">
      { filteredCharacters.map((character) => (
          <div key={character.id} className="flex bg-white/10 p-4 m-2 w-[460px]">
            <Image
              priority
							style={{width: 180, height: 180}}
              alt={character.name}
              width={180}
              height={180}
              src={character.image}
            />
            <ul className="ml-3 relative w-full">
              <li className="text-2xl font-medium">{character.name}</li>
              <li className="mt-2">
                {character.status === 'Alive' ? `🟢${character.status}` : 
                 character.status === 'unknown' ? `❔Desconocido` : 
                `🔴${character.status}`} - {character.species}
              </li>
              <li className="mt-2">
                <small className="text-sm text-slate-400">Ultima ubicación:</small>
                <br />
                <span>{character.location.name}</span>
              </li>
              <li className='absolute bottom-0 right-0'>
                <Link className="text-lg text-slate-400 hover:text-amber-600 select-none cursor-pointer" href={`/character/${character.id}`}>Ver mas</Link>
              </li>
            </ul>
          </div>
        ))}
    </section>
    </>
  );
}
