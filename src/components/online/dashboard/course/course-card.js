import React from 'react';
import {Box, Card, CardContent, LinearProgress, Typography} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

function CourseCard(props) {
    const {
        name,
        image,
        lessons_total,
        lessons_completed,
        tasks_total,
        tasks_completed,
        progress
    } = props

    return (
        <Card>
            <CardContent>
                <Box
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography sx={{maxWidth: '180px', width: '100%'}} variant='h5'>
                        {name}
                    </Typography>
                    <Box sx={{ml: 2}}>
                        {image && <Image src={image} width={112} height={112} alt={name}/>}
                    </Box>
                </Box>
                <Box>
                    <Box sx={{display: 'flex', mb: 1}}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                "& span": {
                                    fontWeight: 800
                                }
                            }}
                        >
                            <span>{lessons_completed?.toString()}/{lessons_total?.toString()}</span> darslar
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                ml: 1,
                                "& span": {
                                    fontWeight: 800
                                }
                            }}
                        >
                            <span>{tasks_completed?.toString()}/{tasks_total?.toString()}</span> amaliy topshiriq
                        </Typography>
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        sx={{height: '12px', borderRadius: 1, backgroundColor: 'divider'}}
                        value={progress}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}

CourseCard.defaultProps = {
    name: "Course name",
    image: null,
    lessons_total: 0,
    lessons_completed: 0,
    tasks_total: 0,
    tasks_completed: 0,
    progress: 0
}

CourseCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    lessons_total: PropTypes.number,
    lessons_completed: PropTypes.number,
    tasks_total: PropTypes.number,
    tasks_completed: PropTypes.number,
    progress: PropTypes.number
}

export default CourseCard;