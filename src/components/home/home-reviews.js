import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";
import ReviewCard from "@/components/global/review-card";

function HomeReviews(props) {
    const {reviews} = props
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
                    O&apos;quvchilar murojati
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
                                justifyContent: "space-between",
                                width: "max-content",
                                minWidth: "100%"
                            }}
                        >
                            {reviews.map((_review, index, array) => (
                                <Box
                                    key={_review.id}
                                    sx={{
                                        width: 274,
                                        mr: index === array.length - 1 ? 0 : 2
                                    }}
                                >
                                    <ReviewCard
                                        name={_review.name}
                                        video={_review.video}
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

export default HomeReviews;