import Link from "next/link"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export default function Cards({ pokemon }) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            // image={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                            // image="/images/charizard.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            {/* <Typography gutterBottom variant="p" component="div">
                                {pokemon.id}
                            </Typography> */}
                            <Typography gutterBottom variant="h5" component="div">
                                {pokemon.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}