import Navbar from '@/components/shared/Navbar/Navbar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='relative background-light850_dark100'>
        <Navbar/>
        <div className='flex'>
            leftsidebar
            <section className='flex flex-col flex-1 min-h-screen px-6 pb-6 pt-36
            max-md:pb-14 sm:px-14'>
                <div className='mx-auto w-full max-w-5xl'>
                    {children}
                </div>

            </section>
            rightsidebar
        </div>
     
    </main>
    
  )
}

export default Layout