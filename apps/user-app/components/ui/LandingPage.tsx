"use client"

import { motion } from "motion/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { z } from "zod"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const feedbackSchema = z.object({
  email: z.string().email({message: "Invalid email address"}),
  name: z.string().min(1, { message: "Name is required"}),
  feedback: z.string().min(1, { message: "Feedback is required"})
})

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [feedData, setFeedData] = useState({
    name: "",
    email: "",
    feedback: ""
  });
  const [errors, setErrors] = useState<{email?: string, name?:string, feedback? : string}>({})

  async function handleSubmit( e: React.FormEvent){
    e.preventDefault();

    const inputCheck = feedbackSchema.safeParse(feedData);
    if (!inputCheck.success){
      const formErrors: {email?: string, name?: string, feedback?: string} = {};
      inputCheck.error.errors.forEach(err => {
        if (err.path[0] === 'email') formErrors.email = err.message;
        if (err.path[0] === 'name') formErrors.name = err.message
        if (err.path[0] === 'feedback') formErrors.feedback = err.message
      });
      setErrors(formErrors)
      return;
    }
    setLoading(true);

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(feedData)
    })
    setLoading(false)
    if (res.ok){
      setFeedData({
        name: "",
        email: "",
        feedback: ""
      });
      alert("Feedback Sent")
    }
    
  }
  return (
    <div className="bg-landingpage pt-10 md:px-16">
      <nav className="flex items-center text-md font-extralight justify-between text-black">
        <div
          className={`${poppins.className} text-4xl flex flex-col justify-center items-center font-semibold text-blue-800`}
        >
          <div className="italic">FlashVault</div>
        </div>
        <div className="list-none hidden font-medium md:flex space-x-10">
          <li className="hover:text-blue-700 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 transition duration-300 cursor-pointer">Why Choose Us?</li>
          <li className="hover:text-blue-700 transition duration-300 cursor-pointer">About Us</li>
        </div>
        <div className="flex items-center font-normal space-x-5">
          <Link href={'/api/auth/signin'}>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded-full group">
            <div className="bg-white px-4 py-2 rounded-full transition duration-200 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] group-active:shadow-[0_0_25px_rgba(236,72,153,0.9)]">
              Get Started
            </div>
          </button>
          </Link>
          
        </div>
      </nav>
      <div>
        <section id="home" className="text-black py-24  w-full font-bold">
          <div className="flex flex-col items-center">
            <div className="w-full text-center justify-center font-light bg-gradient-to-r from-blue-900 via-blue-900  to-blue-950 bg-clip-text text-transparent items-center pb-0 text-[24px] text-[#B8B8BC]">
              <span>Ditch the cash. Use FlashVault
              </span>
            </div>
            <div className="w-full flex bg-gradient-to-r from-blue-900 via-blue-950  to-blue-900 bg-clip-text text-transparent  justify-center gap-2 text-center pb-5 text-[42px] text-gray-100 items-center">
              All-In-One Wallet App,
              You Always Wanted.
            </div>

            <p className="text-lg text-center text-neutral-700 opacity-85 max-w-2xl font-light">
              Manage your money effortlessly with our all-in-one wallet app.
              Send payments instantly, track balances, and stay in control.
            </p>
          </div>
          <div className="flex justify-center pt-10">
            <Link href={'/api/auth/signin'}>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex bg-blue-200 text-black py-2 px-4 rounded-full items-center font-semibold">
              Get Started{" "}
              <span className="font-bold">
                <MdArrowForwardIos />
              </span>
            </motion.button>
            </Link>
          </div>
          <div className="w-fit mx-auto relative pt-20 flex justify-center rounded-lg overflow-hidden items-center">
            <Image src="/hero-3.svg" className="" alt="hero" width={1000} height={1000} />
          </div>
        </section>
        <section id="features" className="text-white p-8 w-full">
          <div className="text-center my-10 w-fit text-blue-950 mx-auto px-5 rounded-full text-md border-2 border-slate-400">Features</div>
          <div className="flex flex-col md:grid  md:grid-cols-5 grid-cols-1 gap-10">
          <motion.div whileHover={{ scale: 1.03 }} animate={{ scale: 1}} transition={{ duration:0.3}} className="bg-slate-200 sm:col-span-3 overflow-hidden relative p-6 text-white shadow-lg rounded-3xl h-96">
                <Image src="/circles.svg" className="absolute -top-16" alt="feat1" width={500} height={500} />
                <Image src="/upi-qr.svg" className="absolute top-3 md:left-44" alt="feat1" width={500} height={500} />
                <div className="absolute top-0 left-0 h-5/6 w-full bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,1))] pointer-events-none"></div>
                <div className="absolute bottom-0 flex flex-col justify-center  left-0 h-1/4 w-full bg-black pointer-events-none">
                </div>
                <h1 className="text-2xl w-96 absolute bottom-1/4 font-bold max-w-lg pl-5 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 bg-clip-text text-transparent">Instant Money Transfer with UPI/QR</h1>
                <p className="text-sm w-3/4 text-neutral-200 absolute pl-6 bottom-9">Send and receive money instantly via UPI or by scanning any QR code — fast, secure, and hassle-free.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} animate={{ scale: 1}} transition={{ duration:0.3}} className="bg-slate-200 overflow-hidden relative p-6 text-white shadow-lg rounded-3xl h-96 sm:col-span-2">
                <Image src={'/scribble.png'} className="absolute top-20 opacity-10 animate-bounce" alt="scribble" width={1000} height={1000} />
                <Image src="/pay-bills.svg" className="absolute top-10 left-14 md:left-52" alt="feat1" width={250} height={100} />
                <div className="absolute top-0 left-0 h-5/6 w-full bg-[linear-gradient(to_top,_rgba(0,0,0,1),_rgba(0,0,0,0))] pointer-events-none"></div> 
                <div className="absolute bottom-0 left-0 h-1/4 w-full bg-black pointer-events-none">
                </div> 
                <h1 className="text-2xl w-96 absolute bottom-1/4 font-bold max-w-lg bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 bg-clip-text text-transparent">One Tap Bill Payments and Recharges</h1>
                <p className="text-sm w-3/4 text-neutral-200 absolute  bottom-6">Send and receive money instantly via UPI or by scanning any QR code — fast, secure, and hassle-free.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} animate={{ scale: 1}} transition={{ duration:0.3}} className="bg-slate-200 p-6 overflow-hidden relative text-white shadow-lg rounded-3xl h-96 sm:col-span-2">
              <Image src={'/ring-square.png'} className="absolute -top-10 -left-1 opacity-10 animate-spin-slow" alt="ring-square" width={500} height={500} />
              <Image src={'/split-pay.svg'} className="absolute top-10 left-28 sm:left-36 " alt="ring-square" width={2000} height={2000} />
              <div className="absolute top-0 left-0 h-5/6 w-full bg-[linear-gradient(to_top,_rgba(0,0,0,1),_rgba(0,0,0,0))] pointer-events-none"></div> 
                <div className="absolute bottom-0 left-0 h-1/4 w-full bg-black pointer-events-none">
                </div> 
                <h1 className="text-2xl w-96 absolute bottom-1/4 font-bold max-w-lg bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 bg-clip-text text-transparent">Split Payments with Friends</h1>
                <p className="text-sm w-3/4 text-neutral-200 absolute  bottom-6">Split restaurant bills, rent, or any group expense and track who paid what — perfect for students and roommates.
                </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} animate={{ scale: 1}} transition={{ duration:0.3}} className="bg-slate-200 overflow-hidden p-6 relative text-white shadow-lg rounded-3xl h-96 col-span-3">
               <Image src={'/ring-element.png'} alt="ring-element" className="opacity-20 animate-spin-slow absolute -top-40 first-line:" width={1000} height={1000} />
               <Image src={'/wallet-pay.svg'} alt="ring-element" className=" absolute rotate-45 top-6 first-line" width={200} height={200} />
               <Image src={'/virtual-card.svg'} alt="ring-element" className=" absolute -rotate-45 left-[200px] md:left-[500px] -top-10 first-line:" width={250} height={250} />
               <div className="absolute top-0 left-0 h-5/6 w-full bg-[linear-gradient(to_top,_rgba(0,0,0,1),_rgba(0,0,0,0))] pointer-events-none"></div> 
                <div className="absolute bottom-0 left-0 h-1/4 w-full bg-black pointer-events-none">
                </div> 
                <h1 className="text-2xl absolute bottom-1/4  font-bold w-96 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 bg-clip-text text-transparent">Virtual Cards for Online Payments</h1>       
                <p className="text-sm w-3/4 text-neutral-200 absolute  bottom-9">Generate secure, app-linked virtual cards for safer online shopping without exposing your bank details.</p>
            </motion.div>
          </div>
        </section>
        <footer className=" md:flex-row sm:flex text-neutral-700 w-full justify-center sm:justify-between pt-10 border-t-2">
          <div className="text-2xl text-blue-800 flex justify-center font-medium">Flash Vault</div>
          <div className="flex py-10 md:py-0 items-center flex-col">
            <Link href={'#home'}>Home</Link>
            <Link href={'#features'}>Features</Link>
            <Link href={'/'}>About Developer</Link>
            <Link href={'https://x.com/amandoestwt'}>X</Link>
            <Link href={'https://github.com/dev-amanydv'}>GitHub</Link>
            <Link href={'https://www.linkedin.com/in/devamanydv/'}>LinkedIn</Link>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1>Help Us To Improve</h1>
            <div className="flex gap-2 flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 justify-between">
                  <input value={feedData.name} onChange={(e) => {
                    setFeedData({ ...feedData, name: e.target.value });
                  }} placeholder="Your Name" type="text" className="h-7 py-1 px-2 text-sm bg-neutral-200 rounded-lg"/>
                  <input  value={feedData.email} onChange={(e) => {
                    setFeedData({ ...feedData, email: e.target.value });
                  }} placeholder="Your Email" type="text" className="h-7 py-1 px-2 text-sm bg-neutral-200 rounded-lg"/>
                  </div>
                  <textarea value={feedData.feedback} onChange={(e) => {
                      setFeedData({ ...feedData, feedback: e.target.value });
                    }} placeholder="Description" className="h-7 py-1 px-2 text-sm bg-neutral-200 rounded-lg"/>
                </div>
                <p className="text-[0.8rem] text-red-500">
                  {errors.name}
                  {errors.email}
                  {errors.feedback}
                </p>
                <button disabled={loading} onClick={handleSubmit} className="py-1 px-4 bg-slate-700 text-white rounded-lg">
                  {loading ? "Submiting..." : "Submit"}
                </button>

              </div>
              
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
