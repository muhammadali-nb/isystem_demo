import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import AboutGalleryCarousel from "@/components/about/about-gallery-carousel";

function AboutGallery(props) {
    const {
        galery,
        ...other
    } = props;

    return (
        <Box
            {...other}
        >
            <Box
                sx={{
                    pb: {
                        md: 12,
                        xs: 8
                    }
                }}
            >
                <Container>
                    <Typography
                        variant="h2"
                    >
                        Foto galeriya
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: {
                                xs: 16,
                                md: 22
                            },
                            mt: {
                                xs: 2,
                                md: 3
                            }
                        }}
                    >
                        Bizning o’quv markazimizga kichik sayohat
                    </Typography>
                    <AboutGalleryCarousel
                        items={galery}
                        sx={{
                            mt: 6
                        }}
                    />
                </Container>
            </Box>
        </Box>
    );
}

export default AboutGallery;