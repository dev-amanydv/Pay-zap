import { Timmana } from 'next/font/google'
import React from 'react'

const timmana = Timmana({
    subsets: ['latin'],
    weight: ['400']
})

const LandingPage = () => {
    
  return (
    <>
    <nav className='flex items-center text-md font-extralight justify-between text-white'>
        <div className={`${timmana.className} text-4xl flex flex-col justify-center items-center font-bold text-blue-500`}>
            <div className=''>PayZap</div>
        </div>
        <div className='list-none flex space-x-10'>
            <li>Features</li>
            <li>Security</li>
            <li>Contact</li>
        </div>
        <div className='flex items-center font-normal space-x-5'>
            <div>
                Login
            </div>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded-full group">
                <div className="bg-black px-4 py-2 rounded-full transition duration-200 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] group-active:shadow-[0_0_25px_rgba(236,72,153,0.9)]">Get Started</div>
            </button>
        </div>
    </nav>
    <div>
        <section className="text-white py-24  w-full font-bold" >
            <div className='flex flex-col items-center'>
                <div className='w-full flex justify-center pb-5 text-[36px] text-[#B8B8BC] items-center'>
                    Ditch the cash. Just PayZap.
                </div>
                
                <p className='text-lg text-center max-w-3xl font-light'>
                    PayZap is your all-in-one payment and wallet solution for fast transfers, easy tracking, and total control.
                    Skip the cash, live fast. Go digital with PayZap.
                    Pay bills, transfer funds, and manage your wallet in one place.
                    Fast, secure, and built for your daily needs.
                </p>
            </div>
            
        </section>
        <section className="text-white" >Features</section>
        <section className="text-white" >Testimonials</section>
    </div>
        
    </>
  )
}

export default LandingPage
