import { createContext, useContext, useEffect, useState } from 'react'

import { StrapiUser } from '~/types'
import { getUserFromLocalCookie } from '~/utils'

type AuthState = {
    user: StrapiUser | null | undefined
    isLoading: boolean
    setUser: (user: StrapiUser | null) => void
    setIsLoading: (isLoading: boolean) => void
}

const initial: AuthState = {
    user: null,
    isLoading: false,
    setUser: () => {},
    setIsLoading: () => {},
}

const Auth = createContext<AuthState>(initial)

type ProviderProps = {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<StrapiUser | null | undefined>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log('getting user')
        if (!!user) return
        ;(async () => {
            setIsLoading(true)
            const _user = await getUserFromLocalCookie()
            setUser(_user)
            setIsLoading(false)
        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const payload = {
        user,
        isLoading,
        setUser,
        setIsLoading,
    }

    return <Auth.Provider value={payload}>{children}</Auth.Provider>
}

export const useAuth = () => useContext(Auth)
