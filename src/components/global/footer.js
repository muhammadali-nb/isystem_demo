import React, {useState} from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    useTheme,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails, useMediaQuery
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Logo} from "@/components/global/logo";
import {Telegram as TelegramIcon} from "@/icons/telegram";
import {Instagram as InstagramIcon} from "@/icons/instagram";
import {Facebook as FacebookIcon} from "@/icons/facebook";
import {Youtube as YoutubeIcon} from "@/icons/youtube";
import {Tiktok as TiktokIcon} from "@/icons/tiktok";

function Footer() {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const [expanded, setExpanded] = useState(false);

    const isExpanded = panel => {
        if (!sm) {
            return true
        }
        return expanded === panel
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                width: "100%",
                background: theme.palette.primary.main,
                color: "#000",
                py: {
                    sm: 6,
                    xs: 4,

                }
            }}
        >
            <Container>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={2.4}
                        sm={4}
                        xs={12}
                    >
                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    sm: "block"
                                },
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: {
                                    xs: "center",
                                    sm: "unset"
                                }
                            }}
                        >
                            <Logo
                                sx={{
                                    width: "100%",
                                    maxWidth: "164px",
                                }}
                                color="white-black"
                            />
                            <Link
                                href="tel:+998998826060"
                                sx={{
                                    mt: 2,
                                    display: "block",
                                    color: "inherit"
                                }}
                            >
                                +998 99 882 60 60
                            </Link>
                            <Link
                                href="tel:+998998846060"
                                sx={{
                                    mt: 1,
                                    display: "block",
                                    color: "inherit"
                                }}
                            >
                                +998 99 884 60 60
                            </Link>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mt: 2
                                }}
                            >
                                <Link
                                    component="a"
                                    href="src/components#"
                                    sx={{
                                        mr: 1
                                    }}
                                >
                                    <TelegramIcon
                                        fontSize="medium"
                                    />
                                </Link>
                                <Link
                                    component="a"
                                    href="src/components#"
                                    sx={{
                                        mr: 1
                                    }}
                                >
                                    <InstagramIcon
                                        fontSize="medium"
                                    />
                                </Link>
                                <Link
                                    component="a"
                                    href="src/components#"
                                    sx={{
                                        mr: 1
                                    }}
                                >
                                    <FacebookIcon
                                        fontSize="medium"
                                    />
                                </Link>
                                <Link
                                    component="a"
                                    href="src/components#"
                                    sx={{
                                        mr: 1
                                    }}
                                >
                                    <TiktokIcon
                                        fontSize="medium"
                                    />
                                </Link>
                                <Link
                                    component="a"
                                    href="src/components#"
                                >
                                    <YoutubeIcon
                                        fontSize="medium"
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={2.4}
                        sm={4}
                        xs={12}
                    >
                        <Accordion
                            elevation={0}
                            sx={{
                                background: "transparent",
                            }}
                            expanded={isExpanded("panel1")}
                            onChange={handleChange("panel1")}
                            disableGutters
                        >
                            <AccordionSummary
                                sx={{
                                    "&:hover": {
                                        background: "transparent"
                                    },
                                }}
                                expandIcon={(
                                    <ExpandMoreIcon
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                sm: "none"
                                            },
                                            color: "#000"
                                        }}
                                    />
                                )}
                                aria-controls="panel1a-content"
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textDecoration: "underline"
                                    }}
                                >
                                    Ma&apos;lumotlar
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link
                                    href="src/components#"
                                    sx={{
                                        display: "block",
                                        color: "inherit"
                                    }}
                                >
                                    Bog&apos;lanish
                                </Link>
                                <Link
                                    href="src/components#"
                                    sx={{
                                        display: "block",
                                        mt: 2,
                                        color: "inherit"
                                    }}
                                >
                                    FAQ
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid
                        item
                        md={2.4}
                        sm={4}
                        xs={12}
                    >
                        <Accordion
                            elevation={0}
                            sx={{
                                background: "transparent"
                            }}
                            expanded={isExpanded("panel2")}
                            onChange={handleChange("panel2")}
                        >
                            <AccordionSummary
                                sx={{
                                    "&:hover": {
                                        background: "transparent"
                                    }
                                }}
                                expandIcon={(
                                    <ExpandMoreIcon
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                sm: "none"
                                            },
                                            color: "#000"

                                        }}
                                    />
                                )}
                                aria-controls="panel1a-content"
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textDecoration: "underline"
                                    }}
                                >
                                    Ta&apos;lim turi
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link
                                    href="src/components#"
                                    sx={{
                                        display: "block",
                                        color: "inherit"
                                    }}
                                >
                                    Online ta&apos;lim
                                </Link>
                                <Link
                                    href="src/components#"
                                    sx={{
                                        mt: 2,
                                        display: "block",
                                        color: "inherit"
                                    }}
                                >
                                    Offline ta&apos;lim
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid
                        item
                        md={2.4}
                        sm={4}
                        xs={12}
                    >
                        <Accordion
                            elevation={0}
                            sx={{
                                background: "transparent"
                            }}
                            expanded={isExpanded("panel3")}
                            onChange={handleChange("panel3")}
                        >
                            <AccordionSummary
                                sx={{
                                    "&:hover": {
                                        background: "transparent"
                                    }
                                }}
                                expandIcon={(
                                    <ExpandMoreIcon
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                sm: "none"
                                            },
                                            color: "#000"
                                        }}
                                    />
                                )}
                                aria-controls="panel1a-content"
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textDecoration: "underline"
                                    }}
                                >
                                    Hujjatlar
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link
                                    href="src/components#"
                                    sx={{
                                        display: "block",
                                        color: "inherit"
                                    }}
                                >
                                    Oferta shartnomasi
                                </Link>
                                <Link
                                    href="src/components#"
                                    sx={{
                                        mt: 2,
                                        display: "block",
                                        color: "inherit"
                                    }}
                                >
                                    Maxfiylik siyosati
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid
                        item
                        md={2.4}
                        sm={4}
                        xs={12}
                    >
                        <Typography
                            variant="body1"
                        >
                            “ISYSTEM” MCHJ,
                            Stir000000000
                            Toshkent shahar
                            Mirzo Ulug’bek tumani
                            Mustaqillik prospekti
                            Mirzo Ulug’bek ko’ch. 54A
                            Ro’yxatdan o’tgan raqam
                            000000
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
        ;
}

export default Footer;