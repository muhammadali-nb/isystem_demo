import React from "react";
import {
    Box,
    Button, Card, CardContent,
    Grid,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const CourseCardPreview = (props) => {
    const {
        title,
        description,
        color,
        image
    } = props;

    return (
        <Card
            sx={{
                backgroundColor: color,
                borderRadius: 1,
            }}
        >
            <CardContent
                sx={{
                    py: {
                        xs: 4,
                        sm: 6,
                        md: 8,
                    },
                    px: {
                        xs: 3,
                        sm: 4,
                        md: 6,
                    },
                }}
            >
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={7}
                        order={{
                            xs: 2,
                            sm: 1
                        }}
                    >
                        <Typography
                            variant="h2"
                        >
                            {title || "Course display name"}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                mt: 2
                            }}
                        >
                            {description || "Course description"}
                        </Typography>
                        <Button
                            size="large"
                            variant="contained"
                            color="secondary"
                            sx={{
                                mt: 4,
                            }}>
                            Kursni sotib olish
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={5}
                        order={{
                            xs: 1,
                            sm: 2
                        }}
                    >
                        {image
                            ? (<Box
                                sx={{
                                    width: "100%",
                                    pt: "100%",
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}
                            />)
                            : (<Box
                                sx={{
                                    width: "100%",
                                    pt: "100%",
                                    borderColor: "divider",
                                    borderWidth: "1px",
                                    borderStyle: "dashed",
                                    borderRadius: 1,
                                    position: "relative"
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        p: 1,

                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="textSecondary"
                                        align="center"
                                    >
                                        Course image
                                    </Typography>
                                    <Typography
                                        align="center"
                                        color="textSecondary"
                                        sx={{ mt: 1 }}
                                        variant="subtitle1"
                                    >
                                        Image used for the course image and also for Open Graph meta
                                    </Typography>
                                </Box>
                            </Box>)}
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    );
};

CourseCardPreview.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string
}

export default CourseCardPreview;
