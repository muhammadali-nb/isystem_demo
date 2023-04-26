import React from "react";
import {Box, Container, Divider, Grid, Typography,} from "@mui/material";

const OnlineCourseDetailsStats = (props) => {

    const {
        modules_count,
        lessons_count,
        duration
    } = props;
    return (
        <Box
            sx={{
                pb: {
                    md: 12,
                    xs: 8
                }
            }}
        >
            <Container>
                <Grid container columnSpacing={3} rowSpacing={5}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{
                            mt: 5,
                        }}
                    >
                        <Typography variant="h3">
                            {`${modules_count}`}
                            <Box
                                component="span"
                                sx={{fontSize: "16px", fontWeight: 400}}>
                                {" "}
                                ta
                            </Box>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: '"MarkPro-Medium", sans-serif',
                                fontWeight: 500,
                                mb: 1,
                            }}>
                            Modullar soni
                        </Typography>
                        <Divider
                            sx={{
                                borderBottomWidth: 2,
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{
                            mt: 5,
                        }}
                    >
                        <Typography variant="h3">
                            {`${lessons_count}`}
                            <Box
                                component="span"
                                sx={{fontSize: "16px", fontWeight: 400}}>
                                {" "}
                                ta
                            </Box>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: '"MarkPro-Medium", sans-serif',
                                fontWeight: 500,
                                mb: 1,
                            }}>
                            Mavzular soni
                        </Typography>
                        <Divider
                            sx={{
                                borderBottomWidth: 2,
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{
                            mt: 5,
                        }}
                    >
                        <Typography variant="h3">
                            {`${duration}`}
                            <Box
                                component="span"
                                sx={{fontSize: "16px", fontWeight: 400}}
                            >
                                {" "}
                                oy
                            </Box>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: '"MarkPro-Medium", sans-serif',
                                fontWeight: 500,
                                mb: 1,
                            }}>
                            Kurs davomiyligi
                        </Typography>
                        <Divider
                            sx={{
                                borderBottomWidth: 2,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OnlineCourseDetailsStats;
