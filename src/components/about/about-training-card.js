import React, {useEffect, useState} from 'react';
import {Box, IconButton, Card, Fade, styled, Typography} from "@mui/material";
import PropTypes from "prop-types";
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

const Controls = (props) => {
    const {
        isVisible,
        isPlaying,
        togglePlaying
    } = props;

    return (
        <Fade
            in={isVisible}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <IconButton
                    onClick={() => togglePlaying?.()}
                    variant="contained"
                    sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.65)",
                        borderRadius: "100vh",
                        backdropFilter: "blur(10px)",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.35)",
                        }
                    }}
                >
                    {isPlaying
                        ? (
                            <PauseIcon
                                sx={{
                                    color: "#fff"
                                }}
                            />
                        )
                        : (
                            <PlayIcon
                                sx={{
                                    color: "#fff"
                                }}
                            />
                        )}
                </IconButton>
            </Box>
        </Fade>
    )
}

function AboutTrainingCard(props) {
    const {
        training
    } = props;

    const [isPlaying, setIsPlaying] = useState(false);
    const [controls, setControls] = useState(true);

    const togglePlaying = () => {
        setIsPlaying(prevState => !prevState)
    }

    const handleControls = () => {
        const timeout = 1000;
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
        <Card
            elevation={0}
            sx={{
                backgroundColor: "transparent"
            }}
        >
            <Box
                onMouseMove={() => !controls && handleControls()}
                sx={{
                    width: "100%",
                    pt: "56.25%",
                    borderRadius: 1,
                    backgroundColor: "secondary.main",
                    position: "relative",
                    isolation: "isolate",
                    overflow: "hidden"
                }}
            >
                <Video
                    url={training.video}
                    width="100%"
                    height="100%"
                    playing={isPlaying}
                    muted={false}
                    onEnded={() => setIsPlaying(false)}
                />
                <Controls
                    isVisible={controls || !isPlaying}
                    isPlaying={isPlaying}
                    togglePlaying={togglePlaying}
                />
            </Box>
            <Box
                sx={{
                    mt: 2
                }}
            >
                <Typography
                    variant="h6"
                >
                    {training.title}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {training.description}
                </Typography>
            </Box>
        </Card>
    );
}

AboutTrainingCard.propTypes = {
    training: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        video: PropTypes.string
    })
}

export default AboutTrainingCard;