import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import '@/styles/styless.scss';
import type { AppProps } from "next/app";
import Link from 'next/link';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
        <div className='main'>
        <div className='header'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
              </div>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
        </>
    )
}

