import React from 'react';
import {Box, Container, Grid, Typography, useTheme} from "@mui/material";
import ContactBannerForm from "@/components/global/contact-banner-form";

function ContactBanner(props) {
    const {...other} = props;
    const theme = useTheme();

    return (
        <Box
            {...other}
        >
            <Box
                sx={{
                    mb: {
                        md: 12,
                        sm: 8,
                        xs: 4
                    }
                }}
            >
                <Container>
                    <Box
                        sx={{
                            background: theme.palette.background.paperPrimary,
                            width: "100%",
                            borderRadius: 1,
                            py: {
                                md: 6,
                                xs: 4
                            },
                            px: {
                                md: 6,
                                sm: 4,
                                xs: 2
                            }
                        }}
                    >
                        <Grid
                            container
                            spacing={4}
                            justifyContent={{
                                md: "space-between"
                            }}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <Typography variant="h5">Biz sizga tanlashda yordam beramiz! </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mt: {
                                            md: 3,
                                            xs: 1
                                        }
                                    }}
                                >
                                    Savollaringiz bo&apos;lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring: biz
                                    barcha savollaringizga javob berish uchun qo&apos;ng&apos;iroq qilamiz.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                md={5}
                                xs={12}
                            >
                                <ContactBannerForm/>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
}

export default ContactBanner;