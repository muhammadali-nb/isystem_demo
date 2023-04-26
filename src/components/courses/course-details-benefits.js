import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import {Cheked as CheckedIcon} from "@/icons/cheked";
import PropTypes from "prop-types";

const CourseDetailsBenefits = (props) => {
    const {benefits} = props;

    return (
        <Box
            sx={{
                pb: {
                    md: 12,
                    xs: 8
                }
            }}
        >
            <Container>
                <Typography variant="h3">Kursimizda nimalarni o’rganasiz</Typography>
                <Grid columnSpacing={3} rowSpacing={3} sx={{pt: 3}} container>
                    {benefits && benefits.map((item) => (
                        <Grid
                            xs={12}
                            sm={6}
                            key={item.id}
                            sx={{display: "flex", alignItems: "flex-start"}}
                            item
                        >
                            <CheckedIcon sx={{mt: 1}}/>
                            <Box sx={{ml: 2}}>
                                <Typography variant="h5">{item.name}</Typography>
                                <Typography>{item.description}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

CourseDetailsBenefits.propTypes = {
    benefits: PropTypes
        .arrayOf(PropTypes.shape({
            id: PropTypes.any,
            name: PropTypes.string,
            description: PropTypes.string
        }))
}

export default CourseDetailsBenefits;
