import {
    Box,
    Button,
    CloseButton,
    Heading,
    Icon,
    Square,
    Stack,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { FiInfo, FiMapPin, FiPhone } from 'react-icons/fi'

import { SiteSettingsResponse } from '~/types'

type Props = {
    siteSettings: SiteSettingsResponse['data']['attributes']
}

export const NavHeader = ({ siteSettings }: Props) => {
    const isMobile = useBreakpointValue({ base: true, md: false })

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
                                    {siteSettings.business_name}
                                </Heading>
                            </Stack>
                        </Stack>

                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            spacing={{ base: '3', sm: '10' }}
                            align={{ base: 'stretch', sm: 'center' }}
                        >
                            <a href={`tel:${siteSettings.contact_number}`}>
                                <Button
                                    leftIcon={<FiPhone />}
                                    color="gray.900"
                                    variant="link"
                                >
                                    Call Now
                                </Button>
                            </a>
                            <a
                                href={siteSettings.google_maps_link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    leftIcon={<FiMapPin />}
                                    color="gray.900"
                                    variant="link"
                                >
                                    Get Directions
                                </Button>
                            </a>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
