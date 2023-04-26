import React from 'react';
import {Box, Button, Container, Grid, styled, Typography} from "@mui/material";
import Image from "next/image";

const NextImage = styled(Image)(() => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
}))

function HomeHero() {
    return (
        <Box
            sx={{
                py: {
                    md: 12,
                    xs: 8
                },
            }}
        >
            <Container>
                <Grid
                    container
                    alignItems="center"
                    columnSpacing={3}
                    rowSpacing={4}
                    direction={{
                        md: "row",
                        xs: "column-reverse"
                    }}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Box
                            sx={{
                                maxWidth: {
                                    md: "100%",
                                    xs: "560px"
                                },
                                mx: {
                                    md: "unset",
                                    xs: "auto"
                                }
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    "&:first-letter": {
                                        color: "primary.main"
                                    }
                                }}
                            >
                                Ta&apos;lim bu ishonchli sarmoya
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 3
                                }}
                            >
                                Dasturlash sohasida talab darajasi yuqori bo’lgan yo’nalishlarni biz bilan o’rganing.
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    mt: 6,
                                    width: {
                                        md: "auto",
                                        xs: "100%"
                                    }
                                }}
                            >
                                Ariza qoldirish
                            </Button>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                maxWidth: {
                                    md: "100%",
                                    xs: "640px"
                                },
                                mx: {
                                    md: "unset",
                                    xs: "auto"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: "40%",
                                    mr: 3,
                                    borderWidth: {
                                        md: "8px",
                                        xs: "6px"
                                    },
                                    borderStyle: "solid",
                                    borderColor: "primary.main",
                                    borderRadius: 2,
                                    overflow: "hidden"
                                }}
                            >
                                <NextImage
                                    src="/header-1.jpg"
                                    width={400}
                                    height={660}
                                    alt="header"
                                    priority
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: "60%",
                                    borderWidth: {
                                        md: "8px",
                                        xs: "6px"
                                    },
                                    borderStyle: "solid",
                                    borderColor: "secondary.main",
                                    borderRadius: 2,
                                    overflow: "hidden"
                                }}
                            >
                                <NextImage
                                    src="/header-2.jpg"
                                    width={600}
                                    height={660}
                                    alt="header"
                                    priority
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HomeHero;