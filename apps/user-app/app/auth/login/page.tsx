'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      phone,
      password,
    })

    if (res?.ok) {
      router.push('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className='w-screen h-screen grid grid-cols-2'>
        
        <div className='col-span-1'>
            <div className='flex justify-center bg-login items-center h-screen'>

                <form onSubmit={handleLogin} className="p-6 rounded-lg backdrop-blur-md bg-gray-200/30 max-w-md mx-auto">
                    <h2 className="text-2xl text-center font-bold mb-4">Welcome Back</h2>
                    <p className='text-center text-neutral-500'>Enter your email and password to access account.</p>
                    <div className='my-10'>
                        <div className='mt-3'>
                            <h1 className='mb-1 text-md'>Mobile Number</h1>
                            <input className='border-[1px] bg-slate-100 w-full py-1 px-2 rounded-md' placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
                        </div>
                        <div className='mt-3'>
                            <h1 className='mb-1 text-md'>Password</h1>
                            <input className='border-[1px] bg-slate-100 w-full py-1 px-2 rounded-md' placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className='flex justify-between p-2 px-4'>
                            <div className='flex gap-2'>
                                <input type='checkbox'  />
                                <div className='text-sm text-neutral-600'>Remember Me</div>
                            </div>
                            <Link href={'/forgot-password'}>
                                <h1 className='text-sm text-blue-600'>
                                    Forgot Your Password?
                                </h1>
                            </Link>
                            
                        </div>
                        <div className=' text-blue-600 text-sm mt-3'> 
                            <Link href={'/auth/signup'}>
                                 Already have an account?
                            </Link>
                            
                        </div>
                        <button className='w-full  bg-slate-800 text-white py-1 rounded-md mt-5' type="submit">Login</button>
                    </div>
                    
                </form>

            </div>
        </div>
        <div className='col-span-1 auth-header overflow-hidden flex items-center justify-center'>
            <Image src={'/hero-4.svg'} alt='hero' className='max-w-[1400px]  relative left-[350px] top-[100px] w-auto h-auto' width={1400} height={1400} />
        </div>
        

    </div>
    
  )
}