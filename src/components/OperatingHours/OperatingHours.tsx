import {
    Box,
    Container,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import React from 'react'

import { OperatingHoursResponse } from '~/types'
import { formatOperatingHours } from '~/utils'

type Props = {
    operatingHours: OperatingHoursResponse['data']['attributes']['time_slot']
}

export const OperatingHours = ({ operatingHours }: Props) => {
    return (
        <Box py="8">
            <Heading as="h2"> Business Hours</Heading>
            <Container px="8">
                <TableContainer>
                    <Table variant="striped" size="sm" colorScheme="yellow">
                        <Thead>
                            <Tr>
                                <Th>Day</Th>
                                <Th>Open</Th>
                                <Th>Close</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {operatingHours.map((day) => {
                                const { name, operating, open, close } = day
                                const opening = formatOperatingHours(open)
                                const closing = formatOperatingHours(close)
                                return (
                                    <Tr key={name}>
                                        <Td fontWeight="extrabold">{name}</Td>
                                        <Td>
                                            {operating ? opening : 'Closed'}
                                        </Td>
                                        <Td>
                                            {operating ? closing : 'Closed'}
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    )
}
