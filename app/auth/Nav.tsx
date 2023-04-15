import Link from 'next/link'
import Login from './Login'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route.js'
import Logout from './Logout'
async function Nav() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link href={'/'}>
        <h1 className='font-bold text-lg'>Entrar</h1>
      </Link>
      <ul className='flex items-center gap-6'>
        {!session?.user && <Login />}
        {session?.user && <Logout image={session.user?.image || ""} />}

      </ul>
    </nav>
  )
}

export default Nav
