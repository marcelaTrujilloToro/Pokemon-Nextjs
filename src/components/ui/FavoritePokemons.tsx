import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoriteCardPokemon } from '../pokemon'

interface Props {
  pokemons: number[];
}

export const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map(id => (
          <FavoriteCardPokemon pokemonId={id} key={id} />
        ))
      }
    </Grid.Container>
  )
}
