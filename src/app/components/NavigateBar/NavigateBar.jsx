import { FaSearch } from "react-icons/fa";
export default function NavigateBar() {
	return (
		<div className="flex max-w-screen-md w-screen justify-center">
			<div className="flex w-full">
        <div className='relative w-full'>
          <input
            className='backdrop-blur-sm w-full p-4 rounded-md border-none bg-white/10 text-white mt-2 pl-10' 
            type="text" 
            name="search-input" 
            placeholder="Buscar..."
          />
          <div className='absolute top-1/2 left-4 transform -translate-y-1/3 text-white'>
            <FaSearch/>
          </div>
        </div>
      </div>
		</div>
	)
}