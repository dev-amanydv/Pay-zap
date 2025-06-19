'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  })
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.message || 'Something went wrong');
    } else {
      const loginRes = await signIn('credentials', {
        redirect: false,
        phone: formData.phone,
        password: formData.password,
      });

      if (loginRes?.ok) {
        router.push('/dashboard');
      } else {
        setError('Signup successful, but login failed.');
      }
    }
  };

  return (
    <div className='w-screen h-screen grid sm:grid-cols-2'>
        
        <div className='col-span-1'>
            <div className='flex justify-center items-center h-screen'>

                <form onSubmit={handleSignup} className="p-6 rounded-lg backdrop-blur-md bg-neutral-100/10 max-w-md mx-auto">
                    <h2 className="text-2xl text-center  font-bold mb-4">Get Started with FlashVault</h2>
                    <p className='text-center text-neutral-500'>Enter details to create account.</p>
                    <div className='my-10'>
                        <div className='flex justify-between gap-4'>
                            <div className='mt-3'>
                                <h1 className='mb-1 text-md'>First Name</h1>
                                <input className='border-[1px] bg-slate-100 w-full py-1 px-2 rounded-md' placeholder="First Name" value={formData.firstName} onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))} required />
                            </div>
                            <div className='mt-3'>
                                <h1 className='mb-1 text-md'>Last Name</h1>
                                <input className='border-[1px] bg-slate-100 w-full py-1 px-2 rounded-md' placeholder="Last Name" value={formData.lastName} onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))} required />
                            </div>
                        </div>
                        
                        <div className='mt-3'>
                            <h1 className='mb-1 text-md'>Email</h1>
                            <input className='border-[1px] bg-slate-100 w-full py-1 px-2 rounded-md' placeholder="ay.work07@gmail.com" value={formData.email} onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))} required />
                        </div>
                        <div className='mt-3'>
                            <h1 className='mb-1 text-md'>Mobile Number</h1>
                            <input className='border-[1px] bg-slate-100 w-full py-1 px-2 rounded-md' placeholder="Phone" value={formData.phone} onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))} required />
                        </div>
                        <div className='mt-3'>
                            <h1 className='mb-1 text-md'>Password</h1>
                            <input className='border-[1px] bg-slate-100 w-full py-1 px-2 rounded-md' placeholder="Password" value={formData.password} onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))} required />
                        </div>
                        <button disabled={loading} className='w-full  bg-slate-800 text-white py-1 rounded-md mt-5' type="submit">{loading ? "Signing Up..." : "Sign Up"}</button>
                        <div className='text-md text-red-600 mt-4 text-center'>
                            {error}
                        </div>
                        <div className=' text-center mt-20 text-blue-600 text-md'> 
                            <Link href={'/auth/login'}>
                                 <h1 className='text-neutral-600'>Already have an account? <span className='text-black'>Login</span></h1>
                            </Link>
                            
                        </div>
                    </div>
                    
                </form>

            </div>
        </div>
        <div className='col-span-1 auth-header overflow-hidden flex items-center justify-center'>
            <Image src={'/hero-4.svg'} alt='hero' className='max-w-[1400px]  relative left-[350px] top-[100px] w-auto h-auto' width={1400} height={1400} />
        </div>
        

    </div>
  );
};

export default SignupPage;