import React, {useMemo} from 'react';
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {fileToUrl} from "@/utils/file-to-url";

const MentorImage = (props) => {
    const {src} = props;

    const image = (
        <Box
            sx={{
                width: "100%",
                pt: "100%",
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 1
            }}
        />
    )

    const placeholder = (
        <Box
            sx={{
                width: "100%",
                pt: "100%",
                borderColor: "divider",
                borderWidth: "1px",
                borderStyle: "dashed",
                borderRadius: 1,
                position: "relative"
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    p: 1,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Typography
                    variant="h6"
                    color="textSecondary"
                    align="center"
                >
                    Mentor image
                </Typography>
                <Typography
                    align="center"
                    color="textSecondary"
                    sx={{mt: 1}}
                    variant="subtitle1"
                >
                    Image used for the mentor and also for Open Graph meta
                </Typography>
            </Box>
        </Box>
    )

    return src ? image : placeholder
}

function MentorCardPreview(props) {
    const {
        image,
        first_name,
        last_name,
        profession,
        description,
        color
    } = props;

    const mentorImageUrl = useMemo(
        () => fileToUrl(image),
        [image]
    )

    return (
        <Card
            sx={{backgroundColor: color}}
        >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <MentorImage src={mentorImageUrl}/>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                    >
                        <Box
                            sx={{py: 3}}
                        >
                            <Typography
                                variant="h3"
                            >
                                {(!first_name && !last_name) && "Mentor's full name"}
                                {first_name} {last_name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    mt: 1
                                }}
                            >
                                {!profession && "Mentor's profession"}
                                {profession}
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 4
                                }}
                            >
                                {!description && "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur atque debitis dolore ducimus esse, explicabo incidunt molestiae natus neque numquam odio tenetur! Aperiam dolore ex exercitationem facilis minus unde?"}
                                {description}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

MentorCardPreview.propTypes = {
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    profession: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string
}

export default MentorCardPreview;