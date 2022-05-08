import {
    Box,
    Button,
    CloseButton,
    Container,
    Icon,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

import { useAuth } from '~/contexts'
import { unsetToken } from '~/utils'

type Props = {}

export const AdminHeader = (props: Props) => {
    const { user } = useAuth()
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
        <Box as="section" pb={{ base: '12', md: '24' }} w="full">
            <Box bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
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
                                <Text fontWeight="medium">Logged in as</Text>
                                <Text color="muted">
                                    {user?.username ||
                                        user?.email ||
                                        'Administrator'}
                                </Text>
                            </Stack>
                        </Stack>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            spacing={{ base: '3', sm: '2' }}
                            align={{ base: 'stretch', sm: 'center' }}
                        >
                            <Button isFullWidth onClick={unsetToken}>
                                Log out
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
