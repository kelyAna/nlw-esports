import { useEffect, useState } from 'react'
import { GameBanner } from './components/GameBanner'

import './styles/main.css'

import logoImg from './assets/logo.svg'
import { CreateAdModal } from './components/CreateAdModal'
import { Game } from './@types/Game'
import axios from 'axios'

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
     .then(response => {
      setGames(response.data)
     })
  }, [])

  return (
    <div className='max-w-[1344] flex flex-col items-center my-20 mx-20'>
     <img src={logoImg} alt="" />

     <h1 className='text-6xl text-white font-black m-20 text-violet-300 border-x-teal-50'>
      Seu duo está aqui
     </h1>

     <div className='grid grid-cols-6 gap-6 mt-[16]'>
      {games.map((game) => (
        <GameBanner 
          key={game.id}
          bannerUrl={game.bannerUrl} 
          title={game.title} 
          adsCount={game._count.ads}
          />
        ))
      }
     </div>
     <CreateAdModal />
    </div>
  )
    
}

export default App
