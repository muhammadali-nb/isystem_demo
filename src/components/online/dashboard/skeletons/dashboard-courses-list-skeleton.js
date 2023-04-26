import React from 'react';
import {Box, Container, Grid, Skeleton} from "@mui/material";

const DashboardCoursesListSkeleton = () => {
    return (
        <Box>
            <Container>
                <Box
                    sx={{mb: 8}}
                >
                    <Skeleton
                        variant='rounded'
                        sx={{
                            maxWidth: '326px',
                            height: '56px',
                            mb: 1
                        }}
                    />
                    <Skeleton
                        variant='rounded'
                        width='100%'
                        sx={{
                            maxWidth: '346px',
                            height: '24px'
                        }}
                    />
                </Box>
                <Box>
                    <Skeleton
                        variant='rounded'
                        width='100%'
                        sx={{
                            maxWidth: '256px',
                            height: '44px'
                        }}
                    />
                    <Grid
                        spacing={3}
                        container
                        sx={{
                            mt: {xs: 2, sm: 4}
                        }}
                    >
                        {[...new Array(3)].map((item, index) => (
                            <Grid
                                xs={12}
                                sm={6}
                                md={4}
                                key={index}
                                item
                            >
                                <Skeleton
                                    variant='rounded'
                                    width='100%'
                                    sx={{
                                        height: '223px'
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default DashboardCoursesListSkeleton;