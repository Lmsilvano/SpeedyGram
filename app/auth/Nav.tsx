import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route.js'
import ButtonLog from './ButtonLog'


async function Nav() {


  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link href={'/'}>
        <h1 className='font-bold text-lg'>Faça acontecer!</h1>
      </Link>
      <ul className='flex items-center gap-6'>
        {!session?.user && <ButtonLog image={''} isLogged={false} />}
        {session?.user && <ButtonLog image={session.user?.image || ""} isLogged={true} />}

      </ul>
    </nav>
  )
}

export default Nav
