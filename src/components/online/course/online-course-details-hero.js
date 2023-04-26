import React from "react";
import {Box, Button, Container, Grid, Typography,} from "@mui/material";

const OnlineCourseDetailsHero = (props) => {
    const {title, description, color, image} = props

    return (
        <Box>
            <Container>
                <Box
                    sx={{
                        py: {
                            xs: 4,
                            sm: 6,
                            md: 8,
                        },
                        px: {
                            xs: 3,
                            sm: 4,
                            md: 6,
                        },
                        backgroundColor: color,
                        borderRadius: 1,
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={7}
                            order={{
                                xs: 2,
                                sm: 1
                            }}
                        >
                            <Typography
                                variant="h2"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 2
                                }}
                            >
                                {description}
                            </Typography>
                            <Button
                                size="large"
                                variant="contained"
                                color="secondary"
                                sx={{
                                    mt: 4,
                                }}>
                                Kursni sotib olish
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={5}
                            order={{
                                xs: 1,
                                sm: 2
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    pt: "100%",
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default OnlineCourseDetailsHero;
