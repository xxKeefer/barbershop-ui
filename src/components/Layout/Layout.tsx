import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

import { useAuth } from '~/contexts'
import { SiteSettingsResponse } from '~/types'

import { AdminHeader } from './AdminHeader'
import { NavHeader } from './NavHeader'

type Props = {
    children: React.ReactNode
    preview?: boolean
    siteSettings: SiteSettingsResponse['data']['attributes']
}

export const Layout = ({ children, preview, siteSettings }: Props) => {
    const { user } = useAuth()
    return (
        <VStack w="full" h="full">
            {!!user && <AdminHeader preview={preview} />}
            <NavHeader siteSettings={siteSettings} />
            <Box>{children}</Box>
        </VStack>
    )
}
