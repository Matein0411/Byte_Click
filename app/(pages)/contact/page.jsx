import React from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Grid,
    IconButton
} from '@mui/material';
import {
    Phone,
    Email,
    LocationOn,
    Facebook,
    Twitter,
    Instagram
} from '@mui/icons-material';

const ContactPage = () => {
    return (
        <Container className="py-8 px-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-lg text-center">
            <Typography variant="h4" gutterBottom className="font-semibold text-3xl text-gray-800 mb-4">
                Contacto Byte_Click
            </Typography>
            <Typography variant="body1" gutterBottom className="text-gray-600 mb-8">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de los siguientes medios.
            </Typography>

            <Box className="flex items-center justify-center mb-4 transition-transform hover:scale-105">
                <IconButton className="mr-2 text-gray-700 hover:text-blue-600">
                    <Phone />
                </IconButton>
                <Typography variant="body1" className="text-gray-700">
                    +593 995623828
                </Typography>
            </Box>

            <Box className="flex items-center justify-center mb-4 transition-transform hover:scale-105">
                <IconButton className="mr-2 text-gray-700 hover:text-green-600">
                    <Email />
                </IconButton>
                <Typography variant="body1" className="text-gray-700">
                    info@byteclick.com
                </Typography>
            </Box>

            <Box className="flex items-center justify-center mb-4 transition-transform hover:scale-105">
                <IconButton className="mr-2 text-gray-700 hover:text-red-600">
                    <LocationOn />
                </IconButton>
                <Typography variant="body1" className="text-gray-700">
                    Calle Falsa 123, Quito, Ecuador
                </Typography>
            </Box>

            <form className="mt-8" noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" fullWidth label="Nombre" required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" fullWidth label="Correo Electrónico" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth label="Asunto" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth label="Mensaje" multiline rows={4} required />
                    </Grid>
                    <Grid item xs={12}>
                    <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "#333" } }}
                    >
                    Enviar
                    </Button>

                    </Grid>
                </Grid>
            </form>

            <Box className="mt-10">
                <Typography variant="h6" className="font-medium text-gray-800 mb-4">
                    Síguenos en redes sociales
                </Typography>
                <Box className="flex justify-center space-x-4">
                    <IconButton href="https://www.facebook.com" target="_blank" className="text-gray-600 hover:text-blue-700">
                        <Facebook />
                    </IconButton>
                    <IconButton href="https://www.twitter.com" target="_blank" className="text-gray-600 hover:text-blue-500">
                        <Twitter />
                    </IconButton>
                    <IconButton href="https://www.instagram.com" target="_blank" className="text-gray-600 hover:text-pink-500">
                        <Instagram />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactPage;
