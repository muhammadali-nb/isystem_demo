import React from 'react';
import {Box, styled} from "@mui/material";
import ReactPlayer from "react-player";

const Video = styled(ReactPlayer)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    "& video": {
        objectFit: "cover",
        objectPosition: "center"
    }
}))

function HomeCommercialVideo() {
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
                overflow: "hidden",
                borderRadius: 1,
                backgroundColor: "secondary.main"
            }}
        >
            <Video
                url="/static/commercial.mp4"
                muted={true}
                width="100%"
                height="100%"
                loop={true}
                playing={true}
                playsinline
                preload="none"
            />
        </Box>
    );
}

export default HomeCommercialVideo;