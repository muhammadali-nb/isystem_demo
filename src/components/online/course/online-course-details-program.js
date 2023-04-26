import React from "react";
import {Typography, Box, Container} from "@mui/material";
import {online} from "@/service/online";
import OnlineCourseDetailsProgramAccordion from "@/components/online/course/online-course-details-program-accordion";

const OnlineCourseDetailsProgram = () => {


    return (
        <Box
            sx={{
                pb: {
                    xs: 3,
                    sm: 6
                },
            }}
        >
            <Container>
                <Box
                    sx={{
                        py: {
                            xs: "20px",
                            sm: "40px",
                            md: "70px"
                        },
                        px: {
                            xs: "15px",
                            sm: "30px",
                            md: "50px"
                        },
                        borderRadius: 1,
                        border: "1px solid",
                        borderColor: "divider"
                    }}>
                    <Box
                        sx={{
                            display: {
                                xs: "block",
                                md: "flex"
                            },
                            justifyContent: "space-between",
                            mb: 3,
                        }}>
                        <Typography
                            variant="h3"
                        >
                            Kursimiz dasturi
                        </Typography>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "412px"
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: 2
                                }}
                            >
                                {online.about_course.description}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex"
                            }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center"
                                }}
                                >
                                    <Box
                                        sx={{
                                            minWidth: "50px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            py: "5px",
                                            px: "12px",
                                            borderRadius: 1,
                                            backgroundColor: "secondary.main",
                                            color: "primary.main",
                                            fontWeight: 600,
                                            mr: {xs: 1, sm: 2},
                                        }}>
                                        {online.about_course.practice}
                                    </Box>
                                    <Typography>Amaliy ishlar</Typography>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "center"}}>
                                    <Box
                                        sx={{
                                            minWidth: "50px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            py: "5px",
                                            px: "12px",
                                            borderRadius: 1,
                                            backgroundColor: "secondary.main",
                                            color: "primary.main",
                                            fontWeight: 600,
                                            mr: {xs: 1, sm: 2},
                                            ml: {xs: 2, sm: 3},
                                        }}>
                                        {online.about_course.course_works}
                                    </Box>
                                    <Typography>Kurs ishi</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <OnlineCourseDetailsProgramAccordion items={online.about_course.in_course}/>
                </Box>
            </Container>
        </Box>
    );
};

export default OnlineCourseDetailsProgram;
