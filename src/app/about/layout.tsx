import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import Footer from '../components/Footer'
export const metadata: Metadata = {
  title: 'ToDo List',
  description: 'Created w/ NextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      < div>
      <Navbar />
      </div>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  )
}
