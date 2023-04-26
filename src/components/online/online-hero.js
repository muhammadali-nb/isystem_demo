import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";

function OnlineHero(props) {
    const {...other} = props;

    return (
        <Box
            {...other}
        >
            <Container>
                <Box
                    sx={{
                        py: {
                            xs: 2,
                            md: 6
                        },
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            alignItems: 'center',
                            flexDirection: {
                                xs: 'column-reverse',
                                md: 'row'
                            },
                        }}
                    >
                        <Grid
                            xs={12}
                            md={8}
                            item
                        >
                            <Typography variant="h1" sx={{
                                "&:first-letter": {
                                    color: "primary.main"
                                }
                            }}
                            >
                                Istalgan vaqtda, istalgan joyda o’zingizga qulay tarzda ta’lim oling
                            </Typography>
                            <Typography sx={{fontSize: '24px', mt: 2}}>
                                Yangi boshlovchilar va amaliyotchilar uchun taniqli
                                IT bozordagi songgi bilimlarni biz bilan o’rganing.
                            </Typography>
                        </Grid>
                        <Grid
                            xs={10}
                            md={4}
                            item
                        >
                            <Image
                                src='/online/online-header.png'
                                style={{
                                    width: '100%',
                                    height: "auto"
                                }}
                                width={500}
                                height={500}
                                alt='space'
                                priority
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default OnlineHero;