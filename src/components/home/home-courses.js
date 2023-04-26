import React from 'react';
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import CourseCard from "@/components/global/course-card";
import Link from "next/link";

function HomeCourses(props) {
    const {courses} = props
    // const {
    //     data,
    //     isLoading,
    //     isSuccess
    // } = useQuery({
    //     queryKey: ["courses"],
    //     queryFn: () => getCourseList()
    // })

    return (
        <Box
            sx={{
                pb: {
                    md: 12,
                    xs: 8
                },
            }}
        >

            <Box>
                <Container>
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
                            {courses.map(_course => (
                                <Grid
                                    key={_course.id}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                >
                                    <Link href={`/courses/${_course.id}`} style={{textDecoration: 'none'}}>
                                        <CourseCard
                                            course={_course}
                                        />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: {
                                sm: 24,
                                xs: 16
                            },
                            maxWidth: 596,
                            mt: {
                                md: 8,
                                xs: 6
                            }
                        }}
                    >
                        Yangi boshlovchilar va amaliyotchilar uchun taniqli IT bozordagi so&apos;nggi bilimlarni biz
                        bilan
                        o’rganing.
                    </Typography>
                    <Grid
                        container
                        columnSpacing={3}
                        rowSpacing={5}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{
                                mt: 5
                            }}
                        >
                            <Typography variant="h3">6</Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"MarkPro-Medium", sans-serif',
                                    fontWeight: 500,
                                    mb: 1
                                }}
                            >
                                Kurslar
                            </Typography>
                            <Divider
                                sx={{
                                    borderBottomWidth: 2
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{
                                mt: 5
                            }}
                        >
                            <Typography variant="h3">15</Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"MarkPro-Medium", sans-serif',
                                    fontWeight: 500,
                                    mb: 1
                                }}
                            >
                                Mentorlar
                            </Typography>
                            <Divider
                                sx={{
                                    borderBottomWidth: 2
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{
                                mt: 5
                            }}
                        >
                            <Typography variant="h3">1000+</Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"MarkPro-Medium", sans-serif',
                                    fontWeight: 500,
                                    mb: 1
                                }}
                            >
                                Bitiruvchilar
                            </Typography>
                            <Divider
                                sx={{
                                    borderBottomWidth: 2
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{
                                mt: 5
                            }}
                        >
                            <Typography variant="h3">150</Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"MarkPro-Medium", sans-serif',
                                    fontWeight: 500,
                                    mb: 1
                                }}
                            >
                                Video Darslar
                            </Typography>
                            <Divider
                                sx={{
                                    borderBottomWidth: 2
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default HomeCourses;