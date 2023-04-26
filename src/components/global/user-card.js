import React from 'react';
import PropTypes from "prop-types";
import {Divider, Typography, Box} from "@mui/material";

function UserCard(props) {
    const {user} = props;

    return (
        <Box>
            <Box
                sx={{
                    width: "100%",
                    pt: "125%",
                    borderRadius: 1,
                    backgroundColor: "background.paper"
                }}
            />
            <Typography
                variant="h5"
                sx={{
                    mt: 3
                }}
            >
                {user.title.split(" ").map((_chunk, index) => (
                    <React.Fragment
                        key={index}
                    >
                        {_chunk}
                        <br/>
                    </React.Fragment>
                ))}
            </Typography>
            <Divider
                sx={{
                    mt: 4
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    mt: 2
                }}
            >
                {user.subtitle}
            </Typography>
        </Box>
    );
}

UserCard.defaultProps = {
    user: {
        title: "User title",
        subtitle: "Subtitle"
    }
}

UserCard.propTypes = {
    user: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
    })
}

export default UserCard;