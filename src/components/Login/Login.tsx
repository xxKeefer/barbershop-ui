import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

import { API } from '~/constants'
import { useAuth } from '~/contexts'
import { StrapiAuth } from '~/types'
import { callApi, setToken } from '~/utils'

import { PasswordField } from './PasswordField'

export const Login = () => {
    const { setUser } = useAuth()
    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: async (values) => {
            const data = await callApi<StrapiAuth>(`${API.strapi}/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: values.identifier,
                    password: values.password,
                }),
            })
            if (data) {
                setToken(data)
                setUser(data.user)
            }
        },
    })

    return (
        <Container
            maxW="lg"
            py={{ base: '12', md: '24' }}
            px={{ base: '0', sm: '8' }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading
                            size={useBreakpointValue({ base: 'xs', md: 'sm' })}
                        >
                            Administrator Login
                        </Heading>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={useBreakpointValue({
                        base: 'transparent',
                        sm: 'bg-surface',
                    })}
                    boxShadow={{
                        base: 'none',
                        sm: useColorModeValue('md', 'md-dark'),
                    }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="identifier">
                                    Login
                                </FormLabel>
                                <Input
                                    name="identifier"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.identifier}
                                />
                            </FormControl>
                            <PasswordField
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox
                                onChange={formik.handleChange}
                                isChecked={formik.values.rememberMe}
                            >
                                Remember me
                            </Checkbox>
                            <Button variant="link" colorScheme="blue" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button
                                colorScheme="blue"
                                onClick={formik.submitForm}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}
