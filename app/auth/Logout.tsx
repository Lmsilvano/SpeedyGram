'use client'

import Image from 'next/image'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

type User = {
    image: string
}
function Logout({ image }: User) {
    return (
        <li className='flex gap-8 items-center'>
            <button className='text-sm
       bg-gray-700
        text-white 
        py-2 px-6 rounded-xl
        disabled:opacity-25'
                onClick={() => signOut()}>Sign out</button>
            <Link href={'/dashboard'}>
                <Image width={64} height={64} src={image} alt='User Image'
                    className='rounded-full' />
            </Link>
        </li>
    )
}

export default Logout