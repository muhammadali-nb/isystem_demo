import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";
import UserCard from "@/components/global/user-card";

function HomeMentors(props) {
    const {mentors} = props


    return (
        <Box
            sx={{
                pb: {
                    md: 12,
                    xs: 8
                }
            }}
        >


            <Box>
                <Container>
                    <Typography
                        variant="h2"
                    >
                        Mentorlar
                    </Typography>
                    <Box
                        sx={{
                            mt: 6
                        }}
                    >
                        <Scrollbar>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "max-content",
                                    minWidth: "100%",
                                    pb: 2
                                }}
                            >
                                {mentors.map((_mentor, index, array) => (
                                    <Box
                                        key={_mentor.id}
                                        sx={{
                                            width: 274,
                                            mr: index === array.length - 1 ? 0 : 2
                                        }}
                                    >
                                        <UserCard
                                            user={{
                                                title: _mentor.name,
                                                subtitle: _mentor.profession,
                                                image: _mentor.image
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Scrollbar>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
}

export default HomeMentors;