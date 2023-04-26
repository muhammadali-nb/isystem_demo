import React from 'react';
import {Box, Container, Skeleton} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";

const HomeCommentsSkeleton = () => {
    return (
        <Box>
            <Container>
                <Skeleton variant='rounded' width={312} height={56}/>
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
                            {[...new Array(4)].map((_item, index, array) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: {
                                            md: 800,
                                            sm: 520,
                                            xs: 320
                                        },
                                        mr: index === array.length - 1 ? 0 : 3
                                    }}
                                >
                                    <Skeleton
                                        variant='rounded'
                                        width='100%'
                                        sx={{
                                            height: {
                                                xs: '478px',
                                                sm: '358px',
                                                md: '312px'
                                            }
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
};

export default HomeCommentsSkeleton;