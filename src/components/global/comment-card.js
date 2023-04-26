import React from 'react';
import PropTypes from "prop-types";
import {Avatar, Box, Button, Typography} from "@mui/material";

function CommentCard(props) {
    const {
        avatar,
        name,
        label,
        paragraph,
        source,
    } = props;

    return (
        <Box
            sx={{
                borderRadius: 1,
                py: 5,
                px: 4,
                backgroundColor: "background.paper"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Avatar
                    src={avatar}
                    sx={{
                        width: 48,
                        height: 48
                    }}
                >
                    {name[0]}
                </Avatar>
                <Box
                    sx={{
                        ml: 2
                    }}
                >
                    <Typography>{name}</Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 700
                        }}
                    >
                        {label}
                    </Typography>
                </Box>
            </Box>
            <Typography
                sx={{
                    mt: 2
                }}
            >
                {paragraph}
            </Typography>
            <Button
                component="a"
                href={source.link}
                target="_blank"
                color="secondary"
                variant="outlined"
                sx={{
                    borderRadius: 1,
                    mt: 3,
                }}
            >
                {source.name}
            </Button>
        </Box>
    );
}

CommentCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    paragraph: PropTypes.string,
    source: PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.node,
        link: PropTypes.string
    })
}

export default CommentCard;