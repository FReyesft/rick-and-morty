'use client'
import { Character } from "@/app/interfaces/Character.interface";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import  Image  from 'next/image'
import toast, { Toaster } from 'react-hot-toast';

export default function CharacterInfo() {
	const apiUrl: string = 'https://rickandmortyapi.com/api';
	const params = useParams()
	const [character, setCharacter] = useState<Character | null>(null)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${apiUrl}/character/${params.id}`)
				const data:Character = await response.json()
				data.name = null;
				if(data.name === null){
					throw new Error();
				}
				console.log(data)
				setCharacter(data)
			}	catch {
				toast.error("Ups... Ha ocurrido in error")
			}
		}
		fetchData()
	}, [params])
	return(
		<>
		  <div><Toaster position='bottom-left'/></div>
			<div>
				<Image
				src={character?.image}
				width={200}
				height={200}
				priority
				alt={character?.name + "image"}
				/>
				<ul>
					<li>{character?.name}</li>
					<li>{character?.status}</li>
					<li>{character?.gender}</li>
				</ul>
			</div>
		</>

	)
}