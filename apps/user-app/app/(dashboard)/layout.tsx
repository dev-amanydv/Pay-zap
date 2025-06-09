import { Inter } from "next/font/google";
import { SidebarItem } from "../../components/SidebarItem";
import { FaExchangeAlt, FaHome, FaWallet } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { AppbarClient } from "../../AppbarClient";

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
      <AppbarClient/>
      <div className={` ${inter.className} flex pt-16`}>
        <div className="border-r border-slate-300 min-h-screen mr-4 p-4">
                { sidebarItems.map((item) => (
                  <div key={item.title} className="mb-4">
                    <SidebarItem href={item.href} title={item.title} icon={item.icon} />
                  </div>
                ))}
        </div>
        <div className="flex-1 p-4">
          {children}
        </div>
    </div>

    </div>
    
  );
}
