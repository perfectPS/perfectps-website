interface BackgroundOrbsProps {
  goldTop?: string
  goldRight?: string
  blueBottom?: string
  blueLeft?: string
}

export function BackgroundOrbs({
  goldTop = '-200px',
  goldRight = '-100px',
  blueBottom = '-150px',
  blueLeft = '-80px',
}: BackgroundOrbsProps) {
  return (
    <div className="orbs-container" aria-hidden>
      <div
        className="orb orb-gold"
        style={{ top: goldTop, right: goldRight }}
      />
      <div
        className="orb orb-blue"
        style={{ bottom: blueBottom, left: blueLeft }}
      />
    </div>
  )
}
