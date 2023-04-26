import React from 'react';
import PropTypes from "prop-types";
import {Box, Button, Card, Grid, Typography} from "@mui/material";

function CourseMentorCardPreview(props) {
    const {
        mentor,
        onDelete,
        ...other
    } = props;

    return (
        <Card {...other}>
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
                        sm={4}
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
                        sm={8}
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
                            <Button
                                color="secondary"
                                variant="outlined"
                                size="small"
                                sx={{
                                    mt: 3,
                                    borderRadius: 1,
                                    px: 2,
                                    py: 1
                                }}
                                onClick={() => onDelete?.()}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}

CourseMentorCardPreview.propTypes = {
    mentor: PropTypes.shape({
        image: PropTypes.shape({
            square: PropTypes.string
        }),
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        profession: PropTypes.string,
        description: PropTypes.string
    }),
    onDelete: PropTypes.func
}

export default CourseMentorCardPreview;