import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Inter } from "@next/font/google";

import { trpc } from "../utils/trpc";
import "../styles/globals.css";

const inter = Inter();

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <main className={inter.className}>
                <Component {...pageProps} />
            </main>
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);
