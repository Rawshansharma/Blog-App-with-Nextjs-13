import './globals.css'
import { Inter } from 'next/font/google'
 import MyProfile from './components/MyProfile'
import Navbar from './components/Navbar'
import MainText from './components/MainText'

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
      <MainText/>
      </body>
    </html>
  )
}
