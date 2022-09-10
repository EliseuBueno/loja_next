import Link from "next/link"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const getStaticPaths = async () => {
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: { pokemon: data },
    }
}
export default function Pokemon({ pokemon }) {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                        // image="/images/charizard.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Número: {pokemon.id}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Nome: {pokemon.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Tipo: {pokemon.types.map((item, index) => (
                                <span key={index}>{item.type.name}</span>
                            ))}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Link href={`/pokemons/${pokemon.id}`}>
                            <a>
                                Detalhes
                            </a>
                        </Link>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    )
}