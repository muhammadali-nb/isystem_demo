import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import CourseMentorCard from "@/components/courses/course-mentor-card";

const mentors = [
    {
        id: 1,
        name: "Azamjon Nemadaliyev",
        profession: "Software Engineer",
        image: null
    },
    {
        id: 2,
        name: "Ozodbek Oripjonov",
        profession: "Frontend Developer",
        image: null
    },
    {
        id: 3,
        name: "Jasurbek Abdulxasanov",
        profession: "Web Designer",
        image: null
    },
    {
        id: 4,
        name: "Fozilbek Imomov",
        profession: "Android Developer",
        image: null
    },
]

function OnlineCourseMentors(props) {
    const {
        mentors,
        color
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
                <Typography
                    variant="h2"
                >
                    Mentorlar
                </Typography>
                <Box
                    sx={{
                        mt: 6
                    }}
                >
                    <Grid
                        container
                        rowSpacing={3}
                        columnSpacing={4}
                        justifyContent="center"
                    >
                        {mentors && mentors.map(_mentor => (
                            <Grid
                                item
                                xs={12}
                                sm={10}
                                md={6}
                                key={_mentor.id}
                            >
                                <CourseMentorCard
                                    color={color}
                                    mentor={_mentor}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default OnlineCourseMentors;