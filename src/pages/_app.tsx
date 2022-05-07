import '@fontsource/lobster'
import '@fontsource/poppins'
import '@fontsource/share-tech-mono'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { theme } from '~/styles'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
