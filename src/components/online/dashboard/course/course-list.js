import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import Link from "next/link";
import {user_paths} from "@/consts/user-paths";
import CourseCard from "@/components/online/dashboard/course/course-card";

function CourseList(props) {
    const {courses} = props

    return (
        <Box>
            <Typography
                sx={{
                    mb: {xs: 2, sm: 4}
                }}
                variant='h4'
            >
                Kurslaringiz
            </Typography>
            <Grid
                container
                spacing={3}
            >
                {courses && courses.map(_course => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={_course?.id}
                    >
                        <Link
                            href={user_paths.user + "/courses/" + _course?.id}
                            style={{
                                textDecoration: "none"
                            }}
                        >
                            <CourseCard
                                name={_course?.name}
                                image={_course?.image}
                                lessons_completed={_course?.lessons_completed}
                                lessons_total={_course?.lessons_total}
                                tasks_completed={_course?.tasks_completed}
                                tasks_total={_course?.tasks_total}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CourseList;