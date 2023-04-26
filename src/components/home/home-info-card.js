import React from 'react';
import PropTypes from "prop-types";
import {Box, Typography} from "@mui/material";

function HomeInfoCard(props) {
    const {
        icon,
        label
    } = props;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    mr: {
                        md: 3,
                        xs: 2
                    }
                }}
            >
                {icon}
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: {
                            md: 24,
                            xs: 16
                        }
                    }}
                >
                    {label}
                </Typography>
            </Box>
        </Box>
    );
}

HomeInfoCard.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string
}

export default HomeInfoCard;