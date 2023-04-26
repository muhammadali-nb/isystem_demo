import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";
import UserCard from "@/components/global/user-card";

const team = [
    {
        id: 1,
        name: "Azamjon Nemadaliyev",
        profession: "Software Engineer",
        image: null
    },
    {
        id: 2,
        name: "Ozodbek Oripjonov",
        profession: "Frontend Developer",
        image: null
    },
    {
        id: 3,
        name: "Jasurbek Abdulxasanov",
        profession: "Web Designer",
        image: null
    },
    {
        id: 4,
        name: "Fozilbek Imomov",
        profession: "Android Developer",
        image: null
    },
]

function AboutTeam(props) {
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
            <Container>
                <Typography
                    variant="h2"
                >
                    Bizning jamoa
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
                                // justifyContent: "space-between",
                                width: "max-content",
                                minWidth: "100%",
                                pb: 2
                            }}
                        >
                            {mentors && mentors.map((_member, index, array) => (
                                <Box
                                    key={_member.id}
                                    sx={{
                                        width: 274,
                                        mr: index === array.length - 1 ? 0 : 2
                                    }}
                                >
                                    <UserCard
                                        user={{
                                            title: _member.name,
                                            subtitle: _member.profession,
                                            image: _member.image
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Scrollbar>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutTeam;