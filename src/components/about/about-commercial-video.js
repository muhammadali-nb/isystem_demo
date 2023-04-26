import React from 'react';
import {Box, styled} from "@mui/material";
import ReactPlayer from "react-player";

const Video = styled(ReactPlayer)(() => ({
    width: "100%",
    height: "100%",
    "& video": {
        objectFit: "cover",
        objectPosition: "center"
    }
}))

function AboutCommercialVideo() {
    return (
        <Box
            sx={{
                width: "100%",
                pt: {
                    md: "30%",
                    sm: "50%",
                    xs: "60%"
                },
                position: "relative",
                isolation: "isolate",
                borderRadius: 1,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 1,
                    backgroundColor: "secondary.main",
                    overflow: "hidden"
                }}
            >
                <Video
                    url="/static/commercial.mp4"
                    muted={true}
                    width="100%"
                    height="100%"
                    loop={true}
                    playing={true}
                />
            </Box>
        </Box>
    );
}

export default AboutCommercialVideo;