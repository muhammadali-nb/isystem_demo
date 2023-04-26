import React from 'react';
import {Box, Skeleton} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";

const HomeMentorsSkeleton = () => {
    return (
        <Box>
            <Skeleton
                varinant="rounded"
                width='100%'
                height={86}
                sx={{
                    maxWidth: '296px'
                }}
            />
            <Box>
                <Scrollbar>
                    <Box
                        sx={{
                            display: "flex",
                            width: "max-content",
                            minWidth: "100%",
                            pb: 2
                        }}>
                        {[...new Array(2)].map((_item, index, array) => (
                            <Box
                                key={index}
                                sx={{
                                    width: 274,
                                    mr: index === array.length - 1 ? 0 : 2
                                }}
                            >
                                <Box
                                    sx={{width: '100%'}}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            pt: '125%',
                                            position: 'relative',
                                            backgroundColor: 'rgb(243,243, 243)',
                                            borderRadius: '8px'
                                        }}>
                                    </Box>
                                </Box>
                                <Skeleton
                                    varinant="rounded"
                                    width={168}
                                    height={96}
                                />
                                <Skeleton
                                    varinant="rounded"
                                    width='100%'
                                    height={2}
                                    sx={{my: 2}}
                                />
                                <Skeleton
                                    varinant="rounded"
                                    width={152}
                                    height={42}
                                />
                            </Box>
                        ))}

                    </Box>
                </Scrollbar>
            </Box>
        </Box>
    );
};

export default HomeMentorsSkeleton;