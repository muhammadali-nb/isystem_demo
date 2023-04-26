import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {Box, Fade, IconButton, styled, Typography} from "@mui/material";
import ReactPlayer from "react-player";
import {PlayArrow as PlayIcon} from "@mui/icons-material";
import PauseIcon from '@mui/icons-material/Pause';

const Video = styled(ReactPlayer)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    "& video": {
        objectFit: "cover",
        objectPosition: "center"
    }
}))

function ReviewCard(props) {
    const {
        name,
        video,
        cover,
    } = props;

    const [isPlaying, setIsPlaying] = useState(false);
    const [controls, setControls] = useState(true);

    const togglePlaying = () => {
        setIsPlaying(prevState => !prevState)
    }

    const handleControls = () => {
        const timeout = 1500;
        setControls(true);

        setTimeout(() => {
            if (isPlaying) {
                setControls(false)
            }
        }, timeout)
    }

    useEffect(
        () => {
            handleControls();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isPlaying])

    return (
        <Box>
            <Box
                onMouseMove={() => !controls && handleControls()}
                sx={{
                    width: "100%",
                    pt: "125%",
                    borderRadius: 1,
                    backgroundColor: "background.paper",
                    position: "relative",
                    overflow: "hidden",
                    isolation: "isolate"
                }}
            >
                <Video
                    url={video}
                    width="100%"
                    height="100%"
                    playing={isPlaying}
                    muted={false}
                    onEnded={() => setIsPlaying(false)}
                    light={cover}
                    playsinline
                    config={{
                        file: {
                            attributes: {
                                preload: 'metadata'
                            }
                        }
                    }}
                >
                </Video>
                <Fade
                    in={controls || !isPlaying}
                >
                    <Box>
                        <Box
                            sx={{
                                position: "absolute",
                                left: 20,
                                bottom: 20,
                                py: 0.5,
                                px: 1,
                                borderRadius: 1,
                                backgroundColor: "#fffae9"
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 500,
                                }}
                            >
                                {name}
                            </Typography>
                        </Box>
                        <IconButton
                            onClick={togglePlaying}
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%)`,
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                borderRadius: "100vh",
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                                }
                            }}
                        >
                            {
                                isPlaying
                                    ? <PauseIcon/>
                                    : <PlayIcon/>
                            }
                        </IconButton>
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
}

ReviewCard.propTypes = {
    name: PropTypes.string,
    video: PropTypes.string,
    cover: PropTypes.string
}

export default ReviewCard;