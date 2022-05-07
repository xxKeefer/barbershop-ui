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
                bg: 'gray.900',
                color: 'white',
            },
            'themed-mdx': {
                color: 'white',
            },
            'h1, h2, h3, h4, h5, h6': {
                paddingTop: ['1.5rem', '2rem'],
                paddingBottom: ['0.1rem', '1rem'],
            },
            'h1, h2, h3': {
                color: 'pink.500',
            },
            'h4, h5, h6': {
                color: 'teal.300',
            },
            li: {
                marginLeft: '1rem',
            },
            blockquote: {
                marginLeft: '1rem',
                paddingLeft: '1rem',
                borderLeft: '0.5rem solid',
                borderColor: 'pink.500',
                bg: 'gray.600',
            },
            hr: {
                paddingTop: '1rem',
                marginBottom: '1rem',
            },
            pre: {
                padding: '1rem',
            },
            code: {
                bg: 'teal.200',
                color: 'teal.800',
                borderRadius: '0.2rem',
                paddingInline: '0.25rem',
            },
            'ul, ol': {
                paddingLeft: ['0.25rem', '1rem'],
                paddingBlock: ['0.25rem', '0.5rem'],
            },
            a: {
                color: 'pink.500',
            },
            div: {
                '&::-webkit-scrollbar': {
                    backgroundColor: 'teal.900',
                    borderRadius: '15px',
                    width: ['2px !important', '10px !important'],
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'pink.500',
                    borderRadius: '15px',
                },
            },
        },
    },
    components: {
        Button: {
            variants: {
                solid: {
                    bg: 'pink.500',
                    color: 'white',
                    _hover: {
                        bg: 'pink.700',
                    },
                },
            },
        },
    },
})
