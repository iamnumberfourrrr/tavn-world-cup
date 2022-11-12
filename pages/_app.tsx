import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { AppShell } from '../components'

type ExtendedAppProps = AppProps & { session: any };

export default function App({ Component, pageProps: { session, ...pageProps} }: ExtendedAppProps) {
  return <SessionProvider>
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  </SessionProvider>
}
