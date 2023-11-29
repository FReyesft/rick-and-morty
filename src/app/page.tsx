'use client'
//App
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavigateBar from '@/app/components/NavigateBar/NavigateBar'
import Characters from './components/Characters/Characters'

//React
import { useState } from 'react'

export default function Home() {
  const [ search, setSearch ] = useState('');
  const handleSearch = (value) => {
    setSearch(value);
  }
  return (
  <>
    <main className="flex min-h-screen w-full flex-col items-center p-6">
     <Header/>
     <NavigateBar onSearchChange={handleSearch}/>
     <Characters search={search}/>
     <Footer/>
    </main>
  </>
  )
}
