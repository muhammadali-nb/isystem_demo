import React from 'react';
import {Box, Container} from "@mui/material";
import AboutCommercialVideo from "@/components/about/about-commercial-video";

function AboutInfo(props) {
    const {...other} = props;

    return (
        <Box
            {...other}
        >
            <Box
                sx={{
                    pb: {
                        md: 12,
                        xs: 8
                    }
                }}
            >
                <Container>
                    <AboutCommercialVideo/>
                </Container>
            </Box>
        </Box>
    );
}

export default AboutInfo;