import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { MdArrowForwardIos} from 'react-icons/md'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

const LandingPage = () => {
    
  return (
    <>
    <nav className='flex items-center text-md font-extralight justify-between text-white'>
        <div className={`${poppins.className} text-4xl flex flex-col justify-center items-center font-semibold text-blue-600`}>
            <div className='italic'>PayZap</div>
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
                <div className='w-full text-center justify-center bg-gradient-to-r from-blue-800  to-gray-500 bg-clip-text text-transparent items-center pb-0 text-[24px] text-[#B8B8BC]'>
                    <span>Ditch the cash. Just</span>  <span className={`${poppins.className} font-semibold italic text-[28px]`}> PayZap</span>
                </div>
                <div className='w-full flex bg-gradient-to-r from-blue-100 via-blue-300  to-blue-100 bg-clip-text text-transparent  justify-center gap-2 text-center pb-5 text-[42px] text-gray-100 items-center'>
                    <span className='h-fit'>All-In-One <span className=''> Wallet</span> App,</span>
                    <span className='text-[43px] h-fit  '>You Always Wanted.</span>
                </div>
                
                <p className='text-lg text-center text-blue-100 opacity-85 max-w-2xl font-light'>
                Manage your money effortlessly with our all-in-one wallet app. Send payments instantly, track balances, and stay in control.
                </p>
            </div>
            <div className='flex justify-center pt-20'>
                <button className='flex bg-purple-500 text-white py-2 px-4 rounded-full items-center font-semibold'>Get Started <span className='font-bold'><MdArrowForwardIos /></span></button>
            </div>
            <div className='w-full pt-20 flex pr-20 justify-center rounded-lg overflow-hidden items-center'>
                <Image src='/hero3.svg' alt='hero' width={1000} height={1000} />
            </div>
            
        </section>
        <section className="text-white" >Features</section>
        <section className="text-white" >Testimonials</section>
    </div>
        
    </>
  )
}

export default LandingPage
