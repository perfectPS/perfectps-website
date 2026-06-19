import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { WhyUs } from '../components/sections/WhyUs'
import { Products } from '../components/sections/Products'
import { Process } from '../components/sections/Process'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { TechStack } from '../components/sections/TechStack'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Products />
      <Process />
      <FeaturedWork />
      <TechStack />
      <About />
      <Contact />
    </>
  )
}
