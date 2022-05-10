import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
        pre: 'Share Tech Mono, monospace',
        code: 'Share Tech Mono, monospace',
    },
    textStyles: {
        h1: {
            fontSize: ['3xl', '5xl'],
        },
        h2: {
            fontSize: ['2xl', '4xl'],
        },
        h3: {
            fontSize: ['xl', '3xl'],
        },
        h4: {
            fontSize: ['lg', '2xl'],
        },
        h5: {
            fontSize: ['lg', 'xl'],
        },
        h6: {
            fontSize: ['lg', 'lg'],
        },
    },
    styles: {
        global: {
            body: {
                color: 'grey.900',
                backgroundColor: 'yellow.50',
            },
        },
    },
    components: {},
})
