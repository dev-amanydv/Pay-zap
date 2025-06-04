import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LandingPage = () => {
  return (
    <>
      <nav className="flex items-center text-md font-extralight justify-between text-white">
        <div
          className={`${poppins.className} text-4xl flex flex-col justify-center items-center font-semibold text-blue-600`}
        >
          <div className="italic">PayZap</div>
        </div>
        <div className="list-none flex space-x-10">
          <li>Features</li>
          <li>Security</li>
          <li>Contact</li>
        </div>
        <div className="flex items-center font-normal space-x-5">
          <div>Login</div>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded-full group">
            <div className="bg-black px-4 py-2 rounded-full transition duration-200 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] group-active:shadow-[0_0_25px_rgba(236,72,153,0.9)]">
              Get Started
            </div>
          </button>
        </div>
      </nav>
      <div>
        <section className="text-white py-24  w-full font-bold">
          <div className="flex flex-col items-center">
            <div className="w-full text-center justify-center bg-gradient-to-r from-blue-800  to-gray-500 bg-clip-text text-transparent items-center pb-0 text-[24px] text-[#B8B8BC]">
              <span>Ditch the cash. Just</span>{" "}
              <span
                className={`${poppins.className} font-semibold italic text-[28px]`}
              >
                {" "}
                PayZap
              </span>
            </div>
            <div className="w-full flex bg-gradient-to-r from-blue-100 via-blue-300  to-blue-100 bg-clip-text text-transparent  justify-center gap-2 text-center pb-5 text-[42px] text-gray-100 items-center">
              <span className="h-fit">
                All-In-One <span className=""> Wallet</span> App,
              </span>
              <span className="text-[43px] h-fit  ">You Always Wanted.</span>
            </div>

            <p className="text-lg text-center text-blue-100 opacity-85 max-w-2xl font-light">
              Manage your money effortlessly with our all-in-one wallet app.
              Send payments instantly, track balances, and stay in control.
            </p>
          </div>
          <div className="flex justify-center pt-10">
            <button className="flex bg-blue-200 text-black py-2 px-4 rounded-full items-center font-semibold">
              Get Started{" "}
              <span className="font-bold">
                <MdArrowForwardIos />
              </span>
            </button>
          </div>
          <div className="w-full relative pt-20 flex pr-20 justify-center rounded-lg overflow-hidden items-center">
            <Image src="/hero3.svg" alt="hero" width={1000} height={1000} />
          </div>
        </section>
        <section className="text-white p-8 w-full">
          <div className="text-center my-10 w-fit mx-auto px-3 rounded-full text-md bg-slate-400">Features</div>
          <div className="grid grid-cols-5 gap-4">
            <div className=" bg-slate-800 relative flex justify-center overflow-hidden text-white shadow-lg rounded-3xl  col-span-3">
                <Image src="/circles.svg" className="absolute -top-16" alt="feat1" width={500} height={500} />
                <Image src="/upi-qr.svg" className="absolute top-3 left-44" alt="feat1" width={500} height={500} />
                <div className="absolute top-0 left-0 h-3/4 w-full bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,1))] pointer-events-none"></div>
                <div className="absolute bottom-0 flex flex-col justify-center  left-0 h-1/4 w-full bg-black pointer-events-none">
                <h1 className="text-4xl font-bold max-w-lg pl-5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 bg-clip-text text-transparent">Instant Money Transfer with UPI/QR</h1>
                </div>
            </div>
            <div className="bg-slate-800 overflow-hidden relative p-6 text-white shadow-lg rounded-3xl h-96 col-span-2">
                <Image src={'/scribble.png'} className="absolute top-20 opacity-30 animate-bounce" alt="scribble" width={1000} height={1000} />
                <Image src="/pay-bills.svg" className="absolute top-10 left-52" alt="feat1" width={250} height={100} />
                <div className="absolute top-0 left-0 h-3/4 w-full bg-[linear-gradient(to_top,_rgba(0,0,0,1),_rgba(0,0,0,0))] pointer-events-none"></div> 
                <div className="absolute bottom-0 left-0 h-1/4 w-full bg-black pointer-events-none">
                <h1 className="text-4xl font-bold max-w-md pl-5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 bg-clip-text text-transparent">One Tap Bill Payments and Recharges</h1>
                </div> 
            </div>
            <div className="bg-slate-800 p-6 overflow-hidden relative text-white shadow-lg rounded-3xl h-96 col-span-2">
              <Image src={'/ring-square.png'} className="absolute -top-10 -left-1 opacity-50 animate-spin-slow" alt="ring-square" width={500} height={500} />
              <Image src={'/split-pay.svg'} className="absolute top-10 left-36 " alt="ring-square" width={2000} height={2000} />
              <div className="absolute top-0 left-0 h-3/4 w-full bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,1))] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-1/4 w-full bg-black pointer-events-none">
              <h1 className="text-4xl font-bold max-w-md pl-5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 bg-clip-text text-transparent">
                Split Payments and Expenses
              </h1>
              </div> 
            </div>
            <div className="bg-slate-800 overflow-hidden p-6 relative text-white shadow-lg rounded-3xl h-96 col-span-3">
               <Image src={'/ring-element.png'} alt="ring-element" className="opacity-20 animate-spin-slow absolute -top-40 first-line:" width={1000} height={1000} />
               <Image src={'/wallet-pay.svg'} alt="ring-element" className=" absolute rotate-45 top-6 first-line" width={200} height={200} />
               <Image src={'/virtual-card.svg'} alt="ring-element" className=" absolute -rotate-45 left-[500px] -top-10 first-line:" width={250} height={250} />
               <div className="absolute top-0 left-0 h-3/4 w-full bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,1))] pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 h-1/4 w-full bg-black pointer-events-none">
               <h1 className="text-4xl font-bold max-w-md pl-5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 bg-clip-text text-transparent">
                Virtual Cards for Online Payments
               </h1>
               </div>          
            </div>
          </div>
        </section>
        <section className="text-white">Testimonials</section>
      </div>
    </>
  );
};

export default LandingPage;
