import { Inter } from "next/font/google";
import { SidebarItem } from "../../components/SidebarItem";
import { FaExchangeAlt, FaHome, FaWallet } from "react-icons/fa";
import { IoLogOutOutline, IoWalletSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { LogoutClient } from "../../LogoutClient";
import { signOut } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";

const inter = Inter({ subsets: ["latin"] });

const sidebarItems = [{
  title: "Dashboard",
  icon: <FaHome />,
  href: "/dashboard"
},
{
  title: "Transactions",
  icon: <FaWallet />,
  href: "/transactions"
},
{
  title: "Transfer",
  icon: <FaExchangeAlt />,
  href: "/transfer"
},
{
    title: "My Wallets",
    icon: <IoWalletSharp />,
    href: "/my-wallets"
  
},
{
  title: "Profile",
  icon:<MdAccountCircle />,
  href: "/profile"
}]

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <Appbar/>
      <div className={` ${inter.className} flex`}>
        <div className="border-r fixed pt-20  flex flex-col justify-between  h-screen  border-slate-300 mr-4 p-4">
          <div>
          { sidebarItems.map((item) => (
                  <div key={item.title} className="mb-4">
                    <SidebarItem href={item.href} title={item.title} icon={item.icon} />
                  </div>
                ))}
          </div>
               
          <LogoutClient/>
        </div>
        <div className="flex-1 ml-24 p-20">
          {children}
        </div>
    </div>

    </div>
    
  );
}
