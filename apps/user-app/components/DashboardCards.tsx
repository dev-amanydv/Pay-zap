import { Poppins } from 'next/font/google'
import React from 'react'
import { FcSimCardChip } from 'react-icons/fc'
import { LuNfc } from 'react-icons/lu'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const DashboardCards = ({name, bankName, accountNumber}: {
  name: string,
  bankName: string,
  accountNumber: number
}) => {
  return (
    <div className='h-36 lg:h-52  p-3 max-w-sm rounded-2xl'>
      <div className='text-neutral-300 font-medium'> {bankName} </div>
      <div className='flex justify-between px-10 py-3 items-center'>
        <div><FcSimCardChip className='text-lg lg:text-5xl' /></div>
        <div><LuNfc className='text-white text-lg lg:text-3xl' /></div>
      </div>
      <div className={`text-neutral-200 ${poppins.className} uppercase`}>{name}</div>
      <div className='flex gap-2 lg:py-4 w-full justify-center text-neutral-100 items-center'> <span>&#x2022;&#x2022;&#x2022;&#x2022;  &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;</span>{accountNumber}</div>
    </div>
  )
}

export default DashboardCards
