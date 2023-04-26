import React from 'react';
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import {Menu as MenuIcon} from "@/icons/menu";
import PropTypes from "prop-types";
import {OnlineLogo} from "@/components/online/online-logo";
import DashboardAccountPopover from "@/components/online/dashboard/dashboard-account-popover";
import DashboardNotificationsPopover from "@/components/online/dashboard/dashboard-notifications-popover";

function DashboardNavbar(props) {
    const {
        onOpenSidebar,
    } = props;

    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: 'background.default',
                color: 'text.secondary'
            }}
        >
            <Container>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: {
                            md: 96,
                            xs: 72
                        }
                    }}
                >
                    <Link
                        href="/online"
                    >
                        <OnlineLogo
                            sx={{
                                height: {
                                    md: 40,
                                    xs: 32
                                }
                            }}
                        />
                    </Link>
                    <Box sx={{flexGrow: 1}}/>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: {
                                md: 'flex',
                                xs: 'none',
                            }
                        }}
                    >
                        <Typography
                            component={Link}
                            href="/about"
                            color="secondary"
                            sx={{
                                textDecoration: "none",
                                mr: 4
                            }}
                        >
                            Kurslar
                        </Typography>
                        <Typography
                            component={Link}
                            href="/contact"
                            color="secondary"
                            sx={{
                                mr: 4,
                                textDecoration: "none",
                            }}
                        >
                            Asosiy
                        </Typography>
                    </Box>
                    <DashboardNotificationsPopover
                        sx={{
                            mr: {
                                xs: 1,
                                md: 3
                            }
                        }}
                    />
                    <DashboardAccountPopover
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            },
                        }}/>
                    <IconButton
                        color="inherit"
                        onClick={() => onOpenSidebar?.()}
                        sx={{
                            display: {
                                md: 'none',
                            }
                        }}
                    >
                        <MenuIcon fontSize="small"/>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

DashboardNavbar.propTypes = {
    onOpenSidebar: PropTypes.func,
}

export default DashboardNavbar;