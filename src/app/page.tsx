import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavigateBar from '@/app/components/NavigateBar/NavigateBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
     <Header/>
     <NavigateBar/>
     <Footer/>
    </main>
  )
}
