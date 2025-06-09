import { IoIosAdd, IoIosNotifications, IoMdSettings } from "react-icons/io";
import DashboardCards from "../../../components/DashboardCards";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdAccountCircle, MdOutlinePhoneIphone } from "react-icons/md";
import { FaCirclePlus, FaMoneyBillTransfer } from "react-icons/fa6";
import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";

async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    const walletBalance = await prisma.wallet.findFirst({
        where:{
            userId: Number(session?.user?.id)
        }
    })
    console.log(session)
    console.log("User id: ", session?.user?.id)
    console.log("Balance: ", balance)
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0,
        walletBalance: walletBalance?.amount || 0
    }
}
async function getUser() {
    const session = await getServerSession(authOptions);
    const user = await prisma.user.findFirst({
        where: {
            id: Number(session?.user?.id)
        }
    });
    return {
        user
    }
}

export default async function DashboardPage() {
    const balance = await getBalance();
    const user = await getUser();
    console.log("user: ", user)
    const userAccounts = [{
        name: "Aman Yadav",
        bankName: "Bank of Baroda",
        accountNumber: 7324
    },{
        name: "Dheeraj Tanwar",
        bankName: "State Bank of India",
        accountNumber: 8824
    }]
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>
            <div className="grid w-full grid-rows-3 grid-cols-6">
                <div className="col-span-4 row-span-1">
                    <div className="flex px-5 justify-between">
                        <div className="py-5">
                            {userAccounts.map((acc, index) => (
                            <div
                                key={index}
                                className={`relative ${index === 1 ? '-mt-16 left-12 bg-slate-600/60 rounded-2xl min-w-64 lg:min-w-96 backdrop-blur-sm max-w-sm z-10' : 'z-0 rounded-2xl max-w-sm first-bank-card'}`}
                            >
                                <DashboardCards
                                name={acc.name}
                                bankName={acc.bankName}
                                accountNumber={acc.accountNumber}
                                />
                            </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-around">
                            <div className="w-fit h-fit lg:min-w-72 my-2 flex p-5 py-5 flex-col rounded-2xl mr-5 bg-neutral-100">
                                <div className="border-b-2 border-neutral-300 pb-2">
                                    <h1 className="text-md text-neutral-500">Total Balance</h1>
                                    <div className="flex pt-2 px-2 justify-between items-center">
                                        <p className="text-2xl font-semibold">{balance.amount/100}</p>
                                        <div className="text-green-700">
                                            +390
                                        </div>
                                    </div>
                                </div>
                                <div className="flex py-4 justify-between">
                                    <div className="flex flex-col">
                                        <h1 className="text-neutral-500">Currency</h1>
                                        <p className="font-medium">INR</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="text-neutral-500">Status</h1>
                                        <p className="text-green-700 font-medium">Active</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-neutral-100 my-2 justify-between flex p-5 min-w-72 w-fit rounded-2xl ">
                                <div>
                                    <h1 className="text-neutral-500">Wallet Balance</h1>
                                    <h1 className="text-2xl font-semibold pt-2 px-2">{balance.walletBalance}</h1>
                                </div>
                                <div className="w-28 pt-5 flex text-blue-800 font-medium flex-col justify-center items-center gap-2">
                                    <div className="text-3xl"><FaCirclePlus /></div>
                                    Add Money
                                </div> 
                            </div>
                            <div className="flex p-5 rounded-2xl gap-2 text-md font-medium w-fit min-w-72 justify-center bg-neutral-100 items-center text-blue-800">
                                <div><IoIosAdd className="text-3xl font-bold" /></div>
                                <h1 className="font-medium">Add New Bank Account</h1>
                            </div>

                        </div>
                        
                    </div>
                    <div>Work In Progress...</div>
                    
                </div>
                <div className="col-span-2 row-span-2 bg-neutral-100 px-3 py-4 rounded-2xl">
                    
                    <div className="flex text-3xl text-neutral-600 justify-between">
                        <div>
                            <IoMdSettings  />
                        </div>
                        <div>
                            <IoIosNotifications />
                        </div>
                    </div>
                    <div className="w-fit flex flex-col py-4 mx-auto justify-center items-center">
                        <MdAccountCircle className="text-[150px]" />
                        <h1 className="font-semibold text-xl py-2 text-blue-950">{}</h1>
                    </div>
                    <div className="flex justify-between px-5">
                        <div className="flex flex-col items-center justify-center">
                            <FaArrowUp className="text-xl bg-blue-800 p-4 rounded-full box-content text-white" />
                            <h1>Send</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <FaArrowDown className="text-xl bg-blue-800 p-4 rounded-full box-content text-white" />
                            <h1>Recieve</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MdOutlinePhoneIphone className="text-xl bg-blue-800 p-4 rounded-full box-content text-white" />
                            <h1>Recharge</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <FaMoneyBillTransfer className="text-xl bg-blue-800 p-4 rounded-full box-content text-white" />
                            <h1>Bill</h1>
                        </div>
                    </div>
                    <div className="my-5">
                        <h1 className="text-xl font-medium">Recent Contacts</h1>
                        <div className=" flex py-4 rounded-2xl my-4 px-3 bg-blue-100 justify-around">
                            <div>
                                <div className="rounded-full bg-neutral-200 flex w-fit box-content p-4">AY</div>
                                <h1 className="text-neutral-700">Aman Yadav</h1>
                            </div>
                            <div>
                                <div className="rounded-full bg-neutral-200 flex w-fit box-content p-4">AY</div>
                                <h1 className="text-neutral-700">Aman Yadav</h1>
                            </div>
                            <div>
                                <div className="rounded-full bg-neutral-200 flex w-fit box-content p-4">AY</div>
                                <h1 className="text-neutral-700">Aman Yadav</h1>
                            </div>
                            <div>
                                <div className="rounded-full bg-neutral-200 flex w-fit box-content p-4">AY</div>
                                <h1 className="text-neutral-700">Aman Yadav</h1>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <h1 className="font-medium text-xl">Recent Activity</h1>
                        <div className="my-4">
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}