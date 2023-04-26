import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";

function PartnerCard(props) {
    const {img, name} = props;

    return (
        <Box
            sx={{
                width: "100%",
                pt: "25%",
                position: "relative"
            }}
        >
            <Image
                src={img}
                alt={name}
                width={440}
                height={120}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center"
                }}
            />
        </Box>
    )
}

function HomePartners(props) {
    const {partners, ...other} = props;


    return (
        <Box
            {...other}
        >

            <Box>
                <Container>
                    <Box
                        sx={{
                            pb: {
                                md: 12,
                                xs: 8
                            }
                        }}
                    >
                        <Typography
                            variant="h2"
                        >
                            Hamkorlarimiz
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: {
                                    md: 24,
                                    xs: 16
                                },
                                mt: 3
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, vero?
                        </Typography>
                        <Box
                            sx={{
                                mt: {
                                    md: 8,
                                    xs: 4
                                }
                            }}
                        >
                            <Grid
                                container
                                columnSpacing={6}
                                rowSpacing={8}
                            >
                                {partners.map(_partner => (
                                    <Grid
                                        key={_partner.id}
                                        item
                                        xs={6}
                                        sm={4}
                                        md={3}
                                    >
                                        <PartnerCard
                                            img={_partner.image}
                                            name={_partner.name}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </Box>


        </Box>
    );
}

export default HomePartners;