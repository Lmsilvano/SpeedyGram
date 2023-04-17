'use client'

import Image from 'next/image'
import { signOut, signIn } from 'next-auth/react'
import Link from 'next/link'

type UserInfo = {
    image: string,
    isLogged: boolean
}
function ButtonLog(user: UserInfo) {

    if (user.isLogged) {
        return (
            <li className='flex gap-8 items-center'>
                <button className='text-sm
       bg-gray-700
        text-white 
        py-2 px-6 rounded-xl
        disabled:opacity-25'
                    onClick={() => signOut()}>Sair</button>
                <Link href={'/dashboard'}>
                    <Image width={64} height={64} src={user.image} alt='User Image'
                        className='rounded-full' />
                </Link>
            </li>
        )
    } else {
        return (
            <li className="list-none">
                <button className="text-sm
             bg-gray-700
              text-white 
              py-2 px-6 rounded-xl
              disabled:opacity-25 " onClick={() => signIn()}>
                    Entrar
                </button>
            </li>

        )
    }
}

export default ButtonLog