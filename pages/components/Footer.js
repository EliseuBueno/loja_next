import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";

export default function Footer() {
    return (
        <>
            <AppBar position="static">
                <Container align="center">
                    <p>Rodapé do Sistema Next.js &copy; 2022</p>
                </Container>
            </AppBar>
        </>
    )
}