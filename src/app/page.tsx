import Hero from '@/components/screens/Hero'
import SlideFoods from '@/components/screens/SlideFoods'
import React from 'react'

export interface HomeI { }
const Home: React.FC<HomeI> = ({ }) => {
  return (
    <main className='bg-color3'>
      <Hero />
      <SlideFoods />
    </main>
  )
}

export default Home