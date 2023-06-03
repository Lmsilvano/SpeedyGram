import './globals.css'
import { Roboto } from 'next/font/google'
import QueryWrapper from './wrappers/QueryWrapper'
import Nav from './auth/Nav'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
export const metadata = {
  title: 'SpeedyGram',
  description: 'Rápido e preciso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable}`}>
        {/* @ts-expect-error Server Component */}
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
