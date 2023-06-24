import './globals.css'
import { Inter } from 'next/font/google'
 import MyProfile from './components/MyProfile'
import Navbar from './components/Navbar'
export const metadata = {
  title: "Raushan's Blog ",
  description: 'Created by Raushan Sharma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-700'>
      <Navbar/>
      <MyProfile/>
      </body>
    </html>
  )
}
