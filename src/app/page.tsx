import Cart from '@/components/screens/Cart'
import Foods from '@/components/screens/Foods'
import Hero from '@/components/screens/Hero'
import SlideFoods from '@/components/screens/SlideFoods'
import React from 'react'

export interface HomeI { }
const Home: React.FC<HomeI> = ({ }) => {
  return (
    <main className='bg-color3'>
      <Hero />
      <SlideFoods />
      <section className='pl-2 pr-2 md:pl-16 md:pr-16 flex items-start flex-col md:flex-row gap-[30px] pb-[100px]'>
        <Cart />
        <Foods />
      </section>
    </main>
  )
}

export default Home