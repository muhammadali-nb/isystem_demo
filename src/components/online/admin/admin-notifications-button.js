import React, {useState} from 'react';
import {Box, Button, Dialog, Grid, Popover, Typography, useMediaQuery, useTheme} from "@mui/material";
import {notification} from "@/service/notification";
import {Notification as NotificationIcon} from "@/icons/notificaion";
import NotificationCard from "@/components/global/notification-card";
import {Close as CloseIcon} from "@/icons/close";
import {Scrollbar} from "@/components/global/scrollbar";

const NotificationPopover = (props) => {
    const {items, ...others} = props
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box {...others} >
            <Button
                onClick={handleClick}
                aria-describedby={id}
                sx={{
                    p: 0,
                    minWidth: '24px',
                    position: 'relative'
                }}
            >
                <NotificationIcon/>
                {items.length > 0 && (
                    <Box sx={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#FF0000',
                        borderRadius: 8,
                        position: 'absolute',
                        top: 4,
                        right: 6
                    }}/>)}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{
                    mt: 2,
                    "& .MuiPaper-elevation": {
                        minWidth: "420px",
                        border: 'none'
                    }
                }}
            >
                <Scrollbar
                    sx={{
                        maxHeight: "360px"
                    }}
                >
                    <Box sx={{px: 3, py: 2}}>
                        <Typography
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                fontSize: '22px'
                            }}
                        >
                            Xabarlar
                        </Typography>
                        <Grid
                            rowSpacing={1}
                            container
                        >
                            {items.map(_notification => (
                                <Grid key={_notification.id} xs={12} item>
                                    <NotificationCard
                                        title={_notification.title}
                                        description={_notification.description}
                                        date={_notification.date}
                                        type={_notification.type}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Scrollbar>
            </Popover>
        </Box>
    );
}

const NotificationFullScreenPopover = (props) => {
    const {items, ...others} = props
    const [dialog, setDialog] = useState(false)

    const dialogOpen = () => {
        setDialog(true)
    }

    const dialogClose = () => {
        setDialog(false)
    }

    return (
        <Box {...others}>
            <Button onClick={dialogOpen} sx={{p: 0, minWidth: '24px', position: 'relative'}}>
                <NotificationIcon/>
                {items.length > 0 && (
                    <Box sx={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#FF0000',
                        borderRadius: 8,
                        position: 'absolute',
                        top: 4,
                        right: 6
                    }}/>)}
            </Button>
            <Dialog
                fullScreen
                open={dialog}
                onClose={dialogClose}
            >
                <Box
                    sx={{
                        px: 2,
                        py: 3
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 4
                        }}
                    >
                        <Typography variant='h3'>
                            Xabarlar
                        </Typography>
                        <CloseIcon onClick={dialogClose}/>
                    </Box>
                    <Grid rowSpacing={1} container>
                        {items.map(_notification => (
                            <Grid key={_notification.id} xs={12} item>
                                <NotificationCard
                                    title={_notification.title}
                                    description={_notification.description}
                                    date={_notification.date}
                                    type={_notification.type}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Dialog>

        </Box>
    );
}

const AdminNotificationsButton = (props) => {
    const {...others} = props;
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Box {...others}>
            {sm
                ? <NotificationPopover items={notification}/>
                : <NotificationFullScreenPopover items={notification}/>
            }
        </Box>
    );
};

export default AdminNotificationsButton;