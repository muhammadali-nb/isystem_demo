import React from 'react';
import PropTypes from "prop-types";
import {Box, Card, styled, Typography} from "@mui/material";
import Image from "next/image";

const NextImage = styled(Image)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "right center"
}))

function CourseCard(props) {
    const {
        course
    } = props;

    return (
        <Card
            sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
                background: course.color,
                py: 4,
                px: 3
            }}
        >
            <Box
                sx={{
                    width: "50%"
                }}
            >
                <Typography
                    sx={{
                        fontSize: "22px",
                        fontWeight: 700,
                        fontFamily: '"MarkPro-Bold", sans-serif'
                    }}
                >
                    {course.name}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "50%",
                    pt: "50%",
                    position: "relative",
                    ml: 2
                }}
            >
                <NextImage
                    src={course.image}
                    alt={course.name}
                    width={224}
                    height={224}
                />
            </Box>
        </Card>
    );
}

CourseCard.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.any,
        name: PropTypes.string,
        color: PropTypes.string,
        image: PropTypes.string,
    }).isRequired
}

export default CourseCard;