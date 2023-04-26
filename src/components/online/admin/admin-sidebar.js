import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {Box, Button, Divider, Drawer, Typography, useMediaQuery} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";
import Link from "next/link";
import AdminSidebarSection from "@/components/online/admin/admin-sidebar-section";
import {Logo} from "@/components/global/logo";
import PropTypes from "prop-types";
import {Home as HomeIcon} from "@/icons/home";
import {ChartBar as ChartBarIcon} from "@/icons/chart-bar";
import {Newspaper as NewspaperIcon} from "@/icons/newspaper";
import {Users as UsersIcon} from "@/icons/users";
import {user_paths} from "@/consts/user-paths";

const index_page = user_paths.admin

const sections = [
    {
        title: "General",
        items: [
            {
                title: "Overview",
                path: index_page,
                icon: <HomeIcon fontSize="small"/>
            },
            {
                title: "Analytics",
                path: index_page + "/analytics",
                icon: <ChartBarIcon fontSize="small"/>
            },
            {
                title: "Users",
                path: index_page + "/users",
                icon: <UsersIcon fontSize="small"/>
            },
            {
                title: "Students",
                path: index_page + "/students",
                icon: <UsersIcon fontSize="small"/>
            },
            {
                title: "Assistants",
                path: index_page + "/assistants",
                icon: <UsersIcon fontSize="small"/>
            },
            {
                title: "Mentors",
                path: index_page + "/mentors",
                icon: <UsersIcon fontSize="small"/>
            },
            {
                title: "Courses",
                path: index_page + "/course",
                icon: <NewspaperIcon fontSize="small"/>,
                children: [
                    {
                        title: "Offline",
                        path: index_page + "/courses/offline"
                    },
                    {
                        title: "Online",
                        path: index_page + "/courses/online"
                    }
                ]
            },
            {
                title: "Staffs",
                path: index_page + "/staffs",
                icon: <UsersIcon fontSize="small"/>
            }
        ]
    }
]

function AdminSidebar(props) {
    const {onClose, open} = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        noSsr: true
    });

    const handlePathChange = () => {
        if (!router.isReady) {
            return;
        }

        if (open) {
            onClose?.();
        }
    };

    useEffect(handlePathChange,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.isReady, router.asPath]);

    const content = (
        <Scrollbar
            sx={{
                height: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div>
                    <Box sx={{p: 3}}>
                        <Link
                            href="/"
                        >
                            <Logo
                                color="yellow-white"
                                sx={{
                                    height: 36,
                                }}
                            />
                        </Link>
                    </Box>
                    <Box sx={{px: 2}}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                backgroundColor: 'neutral.800',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: 3,
                                py: '11px',
                                borderRadius: 1
                            }}
                        >
                            <div>
                                <Typography
                                    color="inherit"
                                    variant="subtitle1"
                                >
                                    iSystem IT Academy
                                </Typography>
                                <Typography
                                    color="neutral.400"
                                    variant="body2"
                                >
                                    Admin
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: "neutral.800",
                        my: 3
                    }}
                />
                <Box sx={{flexGrow: 1}}>
                    {sections.map((section) => (
                        <AdminSidebarSection
                            key={section.title}
                            path={router.asPath}
                            sx={{
                                mt: 2,
                                '& + &': {
                                    mt: 2
                                }
                            }}
                            {...section} />
                    ))}
                </Box>
                <Divider
                    sx={{
                        borderColor: "neutral.800",
                    }}
                />
                <Box sx={{p: 2}}>
                    <Typography
                        variant="subtitle2"
                    >
                        Need help?
                    </Typography>
                    <Typography
                        color="neutral.400"
                        variant="body2"
                    >
                        Check our docs
                    </Typography>
                    <Button
                        component={Link}
                        href="/docs/welcome"
                        fullWidth
                        sx={{
                            mt: 2,
                            backgroundColor: "neutral.800",
                            "&:hover": {
                                backgroundColor: "neutral.700",
                            }
                        }}
                        variant="contained"
                    >
                        Documentation
                    </Button>
                </Box>
            </Box>
        </Scrollbar>
    )

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: "neutral.900",
                        color: "neutral.100",
                        borderRightColor: 'divider',
                        borderRightStyle: 'solid',
                        borderRightWidth: (theme) => theme.palette.mode === 'dark' ? 1 : 0,
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: "neutral.900",
                    color: "neutral.100",
                    width: 280
                }
            }}
            sx={{zIndex: (theme) => theme.zIndex.appBar + 100}}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
}

AdminSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};


export default AdminSidebar;