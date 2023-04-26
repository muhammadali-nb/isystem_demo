import React from 'react';
import {Box, Container, Grid, Skeleton} from "@mui/material";

const OnlineCoursesSkeleton = () => {

    return (
        <Box
            sx={{
                pb: {
                    md: 8,
                    xs: 12,
                }
            }}
        >
            <Container>

                <Grid
                    columnSpacing={3}
                    rowSpacing={5}
                    container
                    sx={{
                        mt: 2, mb: {
                            md: 8,
                            xs: 6
                        }
                    }}
                >
                    {[...new Array(4)].map((_course, index) => (
                        <Grid
                            key={index}
                            xs={12}
                            sm={6}
                            md={3}
                            item
                        >
                            <Box>
                                <Skeleton
                                    variant='rounded'
                                    width={98}
                                    height={47}
                                />
                                <Skeleton
                                    variant='rounded'
                                    width={'100%'}
                                    height={32}
                                    sx={{maxWidth: '136px', my: 1}}/>
                                <Skeleton
                                    variant='rounded'
                                    width={'100%'}
                                    height={2}
                                />

                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box>
                    <Skeleton variant="rounded" width='100%' height={56} sx={{
                        maxWidth: {
                            xs: '232px',
                            sm: '284px',
                            md: '336px'
                        }
                    }}/>
                    <Skeleton
                        variant="rounded"
                        height={32}
                        width='100%'
                        sx={{
                            maxWidth: {
                                sm: '332px',
                                md: '412px'
                            },
                            mt: 3,
                            mb: {
                                xs: 3,
                                sm: 6,
                                md: 8
                            }
                        }}/>
                </Box>
                <Grid spacing={4} container>
                    {[...new Array(6)].map((_course, index) => (
                        <Grid
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            item
                        >
                            <Skeleton variant='rounded' width={'100%'} height={224}/>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>

    );
};

export default OnlineCoursesSkeleton;