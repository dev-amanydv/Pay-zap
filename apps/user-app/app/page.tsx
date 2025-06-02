import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import LandingPage from "../components/ui/LandingPage";

export default async function Page() {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (session?.user){
    redirect('/dashboard')
  } 
  return <>
  <LandingPage/>
  </>
}
