import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { ReactNode } from 'react';
import { Navbar } from '../ui';

interface Props {
    title?: string
    children: ReactNode
}

const origin = (typeof window === 'undefined') ? '': window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name='author' content='Marcela Trujillo Toro' />
                <meta name='description' content='Informacion de x pokemon' />
                <meta name='keywords' content='xxx, pokemon, pokedex' />
                <meta property="og:title" content={`Información sobre ${title}`}/>
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
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
