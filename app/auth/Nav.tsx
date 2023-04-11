import Link from 'next/link'

async function Nav() {
  return (
    <nav>
      <Link href={'/'}>
        <h1>Entrar</h1>
      </Link>
    </nav>
  )
}

export default Nav
