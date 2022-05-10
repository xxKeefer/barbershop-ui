import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

import { API } from '~/constants'
import { HeroResponse } from '~/types'

type Props = {
    attributes: HeroResponse['data']['attributes']
}

export const Hero = ({ attributes }: Props) => {
    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{ base: '0', lg: '12' }}
            py={{ base: '0', lg: '12' }}
        >
            <Stack
                direction={{ base: 'column-reverse', lg: 'row' }}
                spacing={{ base: '0', lg: '20' }}
            >
                <Box
                    width={{ lg: 'sm' }}
                    transform={{ base: 'translateY(-50%)', lg: 'none' }}
                    bg={{
                        base: useColorModeValue('yellow.100', 'yellow.700'),
                        lg: 'transparent',
                    }}
                    mx={{ base: '6', md: '8', lg: '0' }}
                    px={{ base: '6', md: '8', lg: '0' }}
                    py={{ base: '6', md: '8', lg: '12' }}
                >
                    <Stack spacing={{ base: '8', lg: '10' }}>
                        <Stack spacing={{ base: '2', lg: '4' }}>
                            <Heading size="xl" color={'grey.900'}>
                                {attributes.heading}
                            </Heading>
                            <Heading
                                size="lg"
                                fontWeight="normal"
                                fontFamily="Poppins"
                            >
                                {attributes.subheading}
                            </Heading>
                        </Stack>
                        <HStack spacing="3">
                            <Link
                                color={useColorModeValue(
                                    'yellow.600',
                                    'yellow.300',
                                )}
                                fontWeight="bold"
                                fontSize="lg"
                            >
                                {attributes.linkText}
                            </Link>
                            <Icon
                                color={useColorModeValue(
                                    'yellow.600',
                                    'yellow.300',
                                )}
                                as={FaArrowRight}
                            />
                        </HStack>
                    </Stack>
                </Box>
                <Flex flex="1" overflow="hidden">
                    <Image
                        src={`${API.strapiBase}${attributes.mainImage.data.attributes.url}`}
                        alt="Lovely Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        minW="300px"
                        objectFit="cover"
                        flex="1"
                    />
                    <Image
                        display={{ base: 'none', sm: 'initial' }}
                        src={`${API.strapiBase}${attributes.secondImage.data.attributes.url}`}
                        alt="Lovely Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        objectFit="cover"
                    />
                </Flex>
            </Stack>
        </Box>
    )
}
