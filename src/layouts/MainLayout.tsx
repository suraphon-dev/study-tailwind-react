import Navbar from '@/components/Navbar.tsx'
import Footer from '@/components/Footer.tsx'
import { Outlet } from 'react-router'

export default function MainLayout() {
   return (
      <>
         <Navbar />
         <div>
            <Outlet />
         </div>
         <Footer />
      </>
   )
}
