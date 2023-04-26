import React from 'react';
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {online} from "@/service/online";

function OnlineInfo(props) {
    const {
        ...other
    } = props;

    return (
        <Box
            {...other}
        >
            <Container>
                <Box
                    sx={{
                        pb: {
                            xs: 2,
                            md: 6
                        },
                    }}
                >
                    <Grid
                        container
                        columnSpacing={3}
                        rowSpacing={5}
                        sx={{mt: {xs: 1, md: 2} , mb: {xs: 2, md: 4} }}
                    >
                        {online.info.map(info => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                key={info.id}
                            >
                                <Typography variant="h3">{info.count}</Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: '"MarkPro-Medium", sans-serif',
                                        fontWeight: 500,
                                        mb: 1
                                    }}
                                >
                                    {info.title}
                                </Typography>
                                <Divider
                                    sx={{
                                        borderBottomWidth: 2
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default OnlineInfo;