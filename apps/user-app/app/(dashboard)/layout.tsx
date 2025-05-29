import { Inter } from "next/font/google";
import { SidebarItem } from "../../components/SidebarItem";
import { FaExchangeAlt, FaHome, FaWallet } from "react-icons/fa";

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
}]

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex pt-16">
        <div className="w-72 border-r border-slate-300 min-h-screen mr-4 p-4">
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
  );
}
