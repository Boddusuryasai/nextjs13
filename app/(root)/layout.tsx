import Navbar from '@/components/shared/Navbar/Navbar'
import Leftsidebar from '@/components/shared/sidebar/LeftSideBar'
import RightSidebar from '@/components/shared/sidebar/RightSideBar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='relative background-light850_dark100'>
        <Navbar/>
        <div className='flex'>
            <Leftsidebar/>
            <section className='flex flex-col flex-1 min-h-screen px-6 pb-6 pt-36
            max-md:pb-14 sm:px-14'>
                <div className='mx-auto w-full max-w-5xl'>
                    {children}
                </div>

            </section>
            <RightSidebar/>
        </div>
     
    </main>
    
  )
}

export default Layout