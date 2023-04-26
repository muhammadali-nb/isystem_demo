import React from 'react';
import {Box, Container, Grid, styled, Typography, useTheme} from "@mui/material";
import Image from "next/image";

const NextImage = styled(Image)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
}))

function AboutHero(props) {
    const {...other} = props;
    const theme = useTheme();


    return (
        <Box
            {...other}
        >
            <Container>
                <Box
                    sx={{
                        py: {
                            md: 12,
                            xs: 8
                        },
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    pt: {
                                        xs: 0,
                                        md: 3
                                    }
                                }}
                            >
                                <span style={{color: theme.palette.primary.light}}>B</span>iz haqimizda
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: {
                                        xs: 16,
                                        sm: 22
                                    },
                                    mt: 3,
                                }}
                            >
                                Bizning maqsadlarimiz - yoshlarimizga yangi dunyoga yo&apos;l ochadigan axborot
                                texnologiyalari sohasida ta&apos;lim berish va ularni bu sohaga muhabbat qo’yishlariga
                                sababchi bo’lish.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    pt: "60%", // aspect ration = 5 / 3
                                    borderWidth: {
                                        xs: 4,
                                        sm: 6,
                                        md: 8
                                    },
                                    borderStyle: "solid",
                                    borderColor: "secondary.main",
                                    borderRadius: 2,
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                <NextImage
                                    src="/about-hero.jpg"
                                    alt="Team member"
                                    width={600}
                                    height={400}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutHero;