"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Appbar } from "@repo/ui/appbar"
import { usePathname, useRouter } from "next/navigation"

export function AppbarClient() {
    const pathname = usePathname();
    const session = useSession();
    const router = useRouter();
    const isLandingPage = pathname === "/";

    return (
        <>
        {!isLandingPage && <Appbar onSignin={signIn} onSignout={async () => {
            await signOut({ callbackUrl: "/" });
            }} user={session.data?.user} />}
        </>
    )
}