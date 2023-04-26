import React from "react";
import {Box, Container, Grid, Typography,} from "@mui/material";
import {Cheked} from "@/icons/cheked";

const OnlineCourseDetailsMap = (props) => {
    const {benefits} = props
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
                <Typography variant="h3">Kursimizda nimalarni o’rganasiz</Typography>
                <Grid columnSpacing={3} rowSpacing={3} sx={{pt: 3}} container>
                    {benefits && benefits.map((skills) => (
                        <Grid
                            xs={12}
                            sm={6}
                            key={skills.id}
                            sx={{display: "flex", alignItems: "flex-start"}}
                            item>
                            <Cheked sx={{mt: 1}}/>
                            <Box sx={{ml: 2}}>
                                <Typography variant="h5">{skills.name}</Typography>
                                <Typography>{skills.description}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default OnlineCourseDetailsMap;
