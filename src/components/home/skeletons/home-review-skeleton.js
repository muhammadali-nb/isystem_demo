import React from 'react';
import {Box, Container, Skeleton} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";

const HomeReviewSkeleton = () => {
    return (
        <Box>
            <Container>
                <Skeleton variant='rounded' width={300} height={56}/>
                <Box>
                    <Scrollbar>
                        <Box
                            sx={{
                                display: "flex",
                                // justifyContent: "space-between",
                                width: "max-content",
                                minWidth: "100%",
                                mt: {
                                    xs: 3,
                                    sm: 4,
                                    md: 6
                                }
                            }}
                        >
                            {[...new Array(4)].map((_review, index, array) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 274,
                                        height: 332,
                                        borderRadius: "8px",
                                        mr: index === array.length - 1 ? 0 : 2,
                                        backgroundColor: 'rgb(243,243, 243)'

                                    }}
                                >
                                </Box>
                            ))}
                        </Box>
                    </Scrollbar>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeReviewSkeleton;