import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import PropTypes from "prop-types";

const CourseDetailsIntendedStudents = (props) => {
    const {
        intended_students
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
                <Typography variant="h3">Kursimiz kimlarga to’g’ri keladi</Typography>
                <Grid columnSpacing={3} rowSpacing={3} sx={{pt: 5}} container>
                    {intended_students && intended_students.map((item, index) => (
                        <Grid
                            key={item.id}
                            xs={12}
                            md={6}
                            sx={{display: "flex", alignItems: "center"}}
                            item>
                            <Typography
                                variant="h1"
                                sx={{
                                    minWidth: "20px",
                                    mr: {
                                        xs: 3,
                                        sm: 4,
                                        md: 5,
                                    },
                                    color: "primary.main",
                                }}>
                                {`${index + 1}`}
                            </Typography>
                            <Box>
                                <Typography variant="h5" sx={{fontWeight: 500}}>
                                    {item.name}
                                </Typography>
                                <Typography>{item.description}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

CourseDetailsIntendedStudents.propTypes = {
    intended_students: PropTypes
        .arrayOf(PropTypes
            .shape({
                id: PropTypes.any,
                name: PropTypes.string,
                description: PropTypes.string
            }))
}

export default CourseDetailsIntendedStudents;
