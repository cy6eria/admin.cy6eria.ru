import type { AppProps } from 'next/app';
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/nextjs';
import { MainLayout } from '../components';
import { IsAdmin } from '../components/IsAdmin/IsAdmin';
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ClerkProvider {...pageProps}>
            <IsAdmin>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </IsAdmin>
        </ClerkProvider>
    );
}
