import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import AboutTrainingCard from "@/components/about/about-training-card";

const trainings = [
    {
        id: 1,
        title: "Lorem ipsum lorem",
        description: "ipsum lorem ipsum lorem ipsum lorem",
        video: "/static/video.mp4"
    },
    {
        id: 2,
        title: "Lorem ipsum lorem",
        description: "ipsum lorem ipsum lorem ipsum lorem",
        video: null
    },
    {
        id: 3,
        title: "Lorem ipsum lorem",
        description: "ipsum lorem ipsum lorem ipsum lorem",
        video: null
    }
]

function AboutTrainings(props) {
    const {trainings} = props

    return (
        <Box
            sx={{
                mb: {
                    md: 12,
                    sm: 8,
                    xs: 4
                }
            }}
        >
            <Container>
                <Box
                    sx={{
                        maxWidth: 596
                    }}
                >
                    <Typography
                        variant="h2"
                    >
                        Treninglar va konfirensiyalar
                    </Typography>
                    <Typography
                        sx={{
                            mt: 3
                        }}
                        variant="body1"
                    >
                        Bizning maqsadlarimiz - yoshlarimizga yangi dunyoga yo&apos;l ochadigan axborot texnologiyalari
                        sohasida
                        ta&apos;lim berish va ularni bu sohaga muhabbat qo’yishlariga sababchi bo’lish.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        mt: 4
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                    >
                        {trainings.map(_item => (
                            <Grid
                                key={_item.id}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                            >
                              <AboutTrainingCard
                                training={_item}
                              />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutTrainings;