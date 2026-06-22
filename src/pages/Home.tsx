import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { WhyUs } from '../components/sections/WhyUs'
import { Capabilities } from '../components/sections/Capabilities'
import { Products } from '../components/sections/Products'
import { Process } from '../components/sections/Process'
import { TechStack } from '../components/sections/TechStack'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { usePageSeo } from '../hooks/usePageSeo'
import { useLang } from '../hooks/useLang'

export function Home() {
  const lang = useLang()
  usePageSeo({
    title: 'perfectPS | Web, Mobile & VPN Studio | Middle East Digital Studio',
    description: 'perfectPS is a boutique digital studio in Amman, Jordan. We build secure web apps, cross-platform mobile apps, and WireGuard-based VPN infrastructure. Creators of PS Secure VPN. Est. 2019.',
    canonical: `https://perfectps.com/${lang}/`,
    lang,
  })
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
