import Link from 'next/link'
import Login from './Login'
async function Nav() {
  return (
    <nav>
      <Link href={'/'}>
        <h1>Entrar</h1>
      </Link>
      <ul>
        <Login />
      </ul>
    </nav>
  )
}

export default Nav
