import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"

export default function About() {
    return (
        <Container>
            <h1>Sobre o projeto</h1>
            <p>Informações referentes à história do projeto: como, quando foi criado...</p>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image="/images/charizard.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )
}