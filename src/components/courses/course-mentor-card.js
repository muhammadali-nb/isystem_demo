import React from 'react';
import PropTypes from "prop-types";
import {Box, Card, Grid, Typography} from "@mui/material";

function CourseMentorCard(props) {
    const {
        mentor,
        color
    } = props;

    return (
        <Card
            sx={{
                backgroundColor: color
            }}
        >
            <Box
                sx={{
                    p: 2
                }}
            >
                <Grid
                    container
                    columnSpacing={3}
                    rowSpacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sm={5}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                pt: "100%",
                                borderRadius: 1,
                                backgroundColor: "background.default",
                                backgroundImage: `url(${mentor?.image?.square})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >

                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={7}
                    >
                        <Box
                            sx={{
                                py: 1
                            }}
                        >
                            <Typography
                                variant="h5"
                            >
                                {mentor?.first_name} {mentor?.last_name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 600
                                }}
                            >
                                {mentor?.profession}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 2,
                                }}
                            >
                                {mentor?.description}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}

CourseMentorCard.propTypes = {
    mentor: PropTypes.shape({
        image: PropTypes.shape({
            square: PropTypes.string
        }),
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        profession: PropTypes.string,
        description: PropTypes.string
    }),
    color: PropTypes.string
}

export default CourseMentorCard;