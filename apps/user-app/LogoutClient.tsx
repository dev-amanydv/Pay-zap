"use client"
import { signOut } from "next-auth/react"
import { IoLogOutOutline } from "react-icons/io5";

export function LogoutClient() {
    return (
        <>
        {<button onClick={async () => {
            console.log("logout clicked");
            await signOut({ callbackUrl: "/" });
          } } className={`font-medium border-[1px] hover:bg-black cursor-pointer hover:text-white py-1 rounded-lg border-neutral-800 px-3 flex gap-2 items-center w-fit`}>
            <IoLogOutOutline className="text-xl" />
            Logout
          </button>}
        </>
    )
}