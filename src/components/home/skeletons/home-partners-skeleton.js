import React from 'react';
import {Box, Container, Grid, Skeleton} from "@mui/material";

const HomePartnersSkeleton = () => {
    return (
        <Box>
            <Container>
                <Box>
                    <Skeleton variant='rounded' width={300} height={56}/>
                    <Skeleton variant='rounded' width='100%' height={42} sx={{mt: 3, maxWidth: '512px'}}/>
                    <Box sx={{mt: 2}}>
                        <Grid columnSpacing={12} container>
                            {[...new Array(8)].map((item, index) => (
                                <Grid
                                    key={index}
                                    xs={6}
                                    sm={4}
                                    md={3}
                                    item
                                >
                                    <Skeleton width='100%' height={164}/>
                                </Grid>
                            ))}

                        </Grid>
                    </Box>
                </Box>
            </Container>

        </Box>
    );
};

export default HomePartnersSkeleton;