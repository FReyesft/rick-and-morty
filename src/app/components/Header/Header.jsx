import Image from "next/image"
export default function Header() {
	return (
		<>
		<nav className="backdrop-blur-sm bg-white/10 rounded-md max-w-screen-md w-screen p-5">
			<ul className="flex justify-between text-xl items-center">
				<li>
					<Image 
						alt="Icon RickAndMorty"
						width={150}
						height={150}
						src={'https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png'}>
					</Image>
				</li>
				<li>By <span className="text-2xl text-blue-400 font-bold">FReyeSFT</span></li>
			</ul>
		</nav>
		</>
	) 
}