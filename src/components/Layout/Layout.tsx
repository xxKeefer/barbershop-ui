import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

import { useAuth } from '~/contexts'

import { AdminHeader } from './AdminHeader'
import { NavHeader } from './NavHeader'

type Props = {
    children: React.ReactNode
    preview?: boolean
}

export const Layout = ({ children, preview }: Props) => {
    const { user } = useAuth()
    return (
        <VStack w="full" h="full">
            {!!user && <AdminHeader preview={preview} />}
            <NavHeader />
            <Box>{children}</Box>
        </VStack>
    )
}
