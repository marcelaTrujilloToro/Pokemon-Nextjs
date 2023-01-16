import Head from 'next/head'
import React, { FC } from 'react'
import { ReactNode } from 'react';
import { Navbar } from '../ui';

interface Props {
    title?: string
    children: ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name='author' content='Marcela Trujillo Toro' />
                <meta name='description' content='Informacion de x pokemon' />
                <meta name='keywords' content='xxx, pokemon, pokedex' />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
