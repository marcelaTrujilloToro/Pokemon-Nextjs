import { Container, Text, Image, Grid, Card } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { EmptyFavorites, FavoritePokemons } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])


  return (
    <Layout title='Favorites'>

      {
        favoritePokemons.length === 0
          ?
          <EmptyFavorites />
          :
          <FavoritePokemons pokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default FavoritesPage
