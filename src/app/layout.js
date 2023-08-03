
import Navbar from '@/components/layout/Navbar'
import './styles/globals.css'
import { Inter,Sen } from 'next/font/google'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable:"--inter"
})
const sen = Sen({
  weight: ['400','700','800'],
  style:['normal'],
  subsets:['latin'],
   display:'swap',
  variable:"--sen"
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sen.variable} ${inter.variable}`}>
         <Navbar/> 
        {children}
       <Footer/>  
        </body>
    </html>
  )
}
