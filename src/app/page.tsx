'use client'
//App
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
     <NavigateBar onSearchChange={handleSearch}/>
     <Characters search={search}/>
  </>
  )
}
