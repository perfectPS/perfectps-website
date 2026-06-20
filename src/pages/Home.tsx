import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { WhyUs } from '../components/sections/WhyUs'
import { Capabilities } from '../components/sections/Capabilities'
import { Products } from '../components/sections/Products'
import { Process } from '../components/sections/Process'
import { TechStack } from '../components/sections/TechStack'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Capabilities />
      <Products />
      <Process />
      <TechStack />
      <About />
      <Contact />
    </>
  )
}
