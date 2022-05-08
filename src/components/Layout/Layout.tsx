import { Container, VStack } from '@chakra-ui/react'
import React from 'react'

import { useAuth } from '~/contexts'

import { AdminHeader } from './AdminHeader'

type Props = {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
    const { user } = useAuth()
    return (
        <VStack w="full" h="full">
            {!!user && <AdminHeader />}
            <Container>{children}</Container>
        </VStack>
    )
}
