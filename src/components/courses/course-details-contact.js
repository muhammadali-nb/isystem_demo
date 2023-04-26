import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import CourseDetailsContactForm from "@/components/courses/course-details-contact-form";

function CourseDetailsContact() {
    return (
        <Box
            sx={{
                py: {
                    xs: 4,
                    sm: 8,
                    md: 12
                },
                mb: {
                    md: 12,
                    xs: 8
                },
                backgroundColor: "secondary.main"
            }}
        >
            <Container>
                <Box
                    sx={{
                        borderRadius: 1,
                        py: {
                            xs: 3,
                            sm: 4,
                            md: 6
                        },
                        px: {
                            xs: 2,
                            sm: 3,
                            md: 4
                        },
                        backgroundColor: "background.default"
                    }}
                >
                    <Grid
                        container
                        spacing={3}

                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Typography
                                variant="h5"
                            >
                                Kursimiz sizga ma’qul bolgan bo’lsa qo’shimcha malumot olish uchun murojat qilining!
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <CourseDetailsContactForm/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default CourseDetailsContact;