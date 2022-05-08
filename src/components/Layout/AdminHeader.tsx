import {
    Box,
    Button,
    CloseButton,
    Icon,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiInfo } from 'react-icons/fi'

import { useAuth } from '~/contexts'
import { unsetToken } from '~/utils'

type Props = { preview?: boolean }

export const AdminHeader = ({ preview }: Props) => {
    const { user } = useAuth()
    const router = useRouter()
    const isMobile = useBreakpointValue({ base: true, md: false })

    const togglePreview = () => {
        preview
            ? router.push('/api/exit-preview')
            : router.push(
                  `/api/preview?secret=${process.env.NEXT_PUBLIC_PREVIEW_SECRET}`,
              )
    }
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
                            <Button
                                isFullWidth
                                colorScheme={preview ? 'red' : 'green'}
                                onClick={togglePreview}
                            >
                                {preview ? 'Disable' : 'Enable'} Preview Mode
                            </Button>
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
