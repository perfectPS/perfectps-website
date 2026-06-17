import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const variants: any = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } },
}

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}
