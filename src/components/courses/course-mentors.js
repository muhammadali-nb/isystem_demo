import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import CourseMentorCard from "@/components/courses/course-mentor-card";
import PropTypes from "prop-types";

function CourseMentors(props) {
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
                    sx={{
                        mb: 6
                    }}
                >
                    Mentorlar
                </Typography>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={4}
                    justifyContent="center"
                >
                    {mentors && mentors.map(_mentor=> (
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
            </Container>
        </Box>
    );
}

CourseMentors.propTypes = {
    mentors: PropTypes
        .arrayOf(PropTypes.shape({
            id: PropTypes.any,
            image: PropTypes.shape({
                square: PropTypes.string
            }),
            first_name: PropTypes.string,
            last_name: PropTypes.string,
            profession: PropTypes.string,
            description: PropTypes.string
        })),
    color: PropTypes.string
}

export default CourseMentors;