import React, {useState} from 'react';
import {Box, Button, Popover, Typography, List, ListItemButton, ListItemText, Avatar} from "@mui/material";
import {useAuth} from "@/hooks/use-auth";
import toast from "react-hot-toast";
import {useRouter} from "next/router";
import {UserCircle as UserCircleIcon} from "@/icons/user-circle";


const AdminAccountButton = (props) => {
    const {...others} = props
    const [anchorEl, setAnchorEl] = useState(null);

    const {
        user,
        logout
    } = useAuth();

    const router = useRouter();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleLogout = async () => {
        try {
            handleClose();
            await logout();
            router.push('/').catch(console.error);
        } catch (err) {
            console.error(err);
            toast.error('Unable to logout.');
        }
    };

    return (
        <Box {...others}>
            <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                sx={{
                    p: 0,
                    minWidth: '40px',
                    borderRadius: '100vh',
                    backgroundColor: 'background.paper'
                }}
            >
                <Avatar
                    sx={{
                        height: 40,
                        width: 40
                    }}
                    src={user?.avatar}
                >
                    <UserCircleIcon fontSize="small" />
                </Avatar>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    mt: 2,
                    "& .MuiPaper-elevation": {
                        minWidth: '312px',
                        border: 'none'
                    }
                }}
            >
                <Box
                    sx={{
                        p: 2
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar
                            sx={{
                                height: 40,
                                width: 40,
                                mr: 1.5
                            }}
                            src={user?.avatar}
                        >
                            <UserCircleIcon fontSize="small" />
                        </Avatar>
                        <Typography
                            sx={{
                                fontWeight: 500
                            }}
                        >
                            {user?.first_name} {user?.last_name}
                        </Typography>
                    </Box>
                    <List>
                        <ListItemButton
                            sx={{
                                borderRadius: 1,
                                px: 1
                            }}
                        >
                            <ListItemText
                                sx={{
                                    p: 0
                                }}
                                primary="Mening profilm"
                            />
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                borderRadius: 1,
                                px: 1
                            }}
                        >
                            <ListItemText
                                sx={{
                                    p: 0
                                }}
                                primary="Bog’lanish"
                            />
                        </ListItemButton>
                        <ListItemButton
                            onClick={handleLogout}
                            sx={{
                                borderRadius: 1,
                                px: 1
                            }}
                        >
                            <ListItemText
                                sx={{
                                    p: 0
                                }}
                                primary="Chiqish"
                            />
                        </ListItemButton>
                    </List>
                </Box>
            </Popover>
        </Box>
    );
};

export default AdminAccountButton;