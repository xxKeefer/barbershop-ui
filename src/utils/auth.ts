import Cookies from 'js-cookie'
import Router from 'next/router'

import { API } from '~/constants'
import { StrapiAuth, StrapiUser } from '~/types'

import { callApi } from './api'

export const setToken = (data: StrapiAuth) => {
    if (typeof window === 'undefined') {
        return
    }
    Cookies.set('id', String(data.user.id))
    Cookies.set('username', data.user.username)
    Cookies.set('jwt', data.jwt)

    if (Cookies.get('username')) {
        // Router.reload()
        Router.push('/')
    }
}

export const unsetToken = () => {
    if (typeof window === 'undefined') {
        return
    }
    Cookies.remove('id')
    Cookies.remove('jwt')
    Cookies.remove('username')

    Router.reload()
}

export const getUserFromLocalCookie = async () => {
    const jwt = getTokenFromLocalCookie()
    if (!jwt) return
    try {
        const data = await callApi<StrapiUser>(`${API.strapi}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getIdFromLocalCookie = async () => {
    const jwt = getTokenFromLocalCookie()
    if (!jwt) return

    try {
        const data = await callApi<StrapiUser>(`${API.strapi}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })

        if (!data) return undefined
        return data.id
    } catch (error) {
        console.error(error)
    }
}

export const getTokenFromLocalCookie = () => {
    return Cookies.get('jwt')
}

interface JwtRequest extends Request {
    headers: {
        cookie?: string
    } & Headers
}

export const getTokenFromServerCookie = (req: JwtRequest) => {
    if (!req.headers.cookie) return undefined

    const jwtCookie = req.headers.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('jwt='))
    if (!jwtCookie) {
        return undefined
    }
    const jwt = jwtCookie.split('=')[1]
    return jwt
}

export const getIdFromServerCookie = (req: JwtRequest) => {
    if (!req.headers.cookie) return undefined

    const idCookie = req.headers.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('id='))
    if (!idCookie) {
        return undefined
    }
    const id = idCookie.split('=')[1]
    return id
}
