import {
    Box,
    CloseButton,
    Heading,
    Icon,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

export const NavHeader = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    const navHeader = {
        businessName: 'Hourglass Barbershop',
    }

    return (
        <Box as="section" pb={{ base: '12', md: '24' }} w="full">
            <Box bg="yellow.400" boxShadow={useColorModeValue('sm', 'sm-dark')}>
                <Box py={{ base: '4', md: '2.5' }} px="4" position="relative">
                    <CloseButton
                        display={{ sm: 'none' }}
                        position="absolute"
                        right="2"
                        top="2"
                    />
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        justify="space-between"
                        spacing={{ base: '3', md: '2' }}
                    >
                        <Stack
                            spacing="4"
                            direction={{ base: 'column', md: 'row' }}
                            align={{ base: 'start', md: 'center' }}
                        >
                            {!isMobile && (
                                <Square
                                    size="12"
                                    bg="bg-subtle"
                                    borderRadius="md"
                                >
                                    <Icon as={FiInfo} boxSize="6" />
                                </Square>
                            )}
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                spacing={{ base: '0.5', md: '1.5' }}
                                pe={{ base: '4', sm: '0' }}
                            >
                                <Heading as="h1" size="lg">
                                    {navHeader.businessName}
                                </Heading>
                            </Stack>
                        </Stack>

                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            spacing={{ base: '3', sm: '2' }}
                            align={{ base: 'stretch', sm: 'center' }}
                        >
                            <Text>some links</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
