import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import CourseCard from "@/components/global/course-card";
import {useQuery} from "react-query";
import {getCourse} from "@/api-functions/course/get-course";
import OnlineCourseSkeleton from "@/components/online/skeletons/online-course-skeleton";
import {getCourseList} from "@/api-functions/course/get-course-list";
import OnlineInfo from "@/components/online/online-info";

const OnlineCourses = (props) => {
    const {courses} = props;
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: 'online-courses',
        queryFn: () => getCourseList()
    })

    return (
        <Box>
            {isLoading ? <OnlineCourseSkeleton/> : (
                <Box>
                    <OnlineInfo/>
                    <Container>
                        <Box
                            sx={{
                                pb: {
                                    md: 12,
                                    xs: 8
                                },
                            }}
                        >
                            <Typography variant="h2">Bizning kurslar</Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: {
                                        sm: 24,
                                        xs: 16
                                    },
                                    mt: {
                                        sm: 3,
                                        xs: 2
                                    }
                                }}
                            >
                                O’zingizga mos Kursni tanlang
                            </Typography>
                            <Box
                                sx={{
                                    mt: {
                                        xs: 3,
                                        sm: 6,
                                        md: 8
                                    }
                                }}
                            >
                                <Grid
                                    container
                                    spacing={4}
                                >
                                    {isSuccess && data?.results.map(_course => (
                                        <Grid
                                            key={_course.id}
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                        >
                                            <Link href={`/online/courses/${_course.id}`}
                                                  style={{textDecoration: 'none'}}>
                                                <CourseCard
                                                    course={_course}
                                                />
                                            </Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            )}
        </Box>
    );
};

export default OnlineCourses;