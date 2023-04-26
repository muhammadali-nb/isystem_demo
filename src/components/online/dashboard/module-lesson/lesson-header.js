import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import PrevPage from "@/components/global/prev-page";

const LessonHeader = (props) => {
    const {...others} = props

    return (
        <Box {...others}>
            <Container maxWidth="md">
                <PrevPage link='/online/dashboard'/>
                <Typography
                    variant='h4'
                    sx={{
                        mt: 2,
                        fontWeight: 500
                    }}
                >
                    1.2 “Data Science” va AI asoslari
                </Typography>
            </Container>
        </Box>
    );
};

export default LessonHeader;