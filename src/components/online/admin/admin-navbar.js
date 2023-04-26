import React from 'react';
import {AppBar, Box, IconButton, styled, Toolbar} from "@mui/material";
import {Menu as MenuIcon} from "@/icons/menu";
import PropTypes from "prop-types";
import AdminNotificationsButton from "@/components/online/admin/admin-notifications-button";
import AdminAccountButton from "@/components/online/admin/admin-account-button";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    ...(theme.palette.mode === 'light'
        ? {
            boxShadow: theme.shadows[3]
        }
        : {
            backgroundColor: theme.palette.background.paper,
            borderBottomColor: theme.palette.divider,
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            boxShadow: 'none'
        })
}));

function AdminNavbar(props) {
    const {
        onOpenSidebar,
        ...other
    } = props;

    return (
        <>
            <DashboardNavbarRoot
                sx={{
                    left: {
                        lg: 280
                    },
                    width: {
                        lg: 'calc(100% - 280px)'
                    }
                }}
                {...other}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <IconButton
                        onClick={onOpenSidebar}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none'
                            }
                        }}
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <AdminNotificationsButton
                        sx={{
                            mr: 3
                        }}
                    />
                    <AdminAccountButton/>
                </Toolbar>
            </DashboardNavbarRoot>
        </>
    )
}

AdminNavbar.propTypes = {
    onOpenSidebar: PropTypes.func,
}

export default AdminNavbar;