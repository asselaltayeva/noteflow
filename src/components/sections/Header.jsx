import React from 'react'
function Header({children}) {
  return (
<header
  style={{
    backgroundImage: `linear-gradient(to bottom, var(--color-primary-1500), var(--color-primary-1300)), url('/assets/Noise.webp')`,
    backgroundBlendMode: 'overlay',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  className="py-10 max-xl:py-8 max-lg:pb-24 max-md:pt-6 max-md:pb-24 "
>{children}
</header>

  )
}
export default Header
