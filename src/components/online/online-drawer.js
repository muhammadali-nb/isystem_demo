import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {Box, Button, Drawer, IconButton, List, ListItem, Typography, useMediaQuery} from "@mui/material";
import {Logo} from "@/components/global/logo";
import {Close as CloseIcon} from "@/icons/close";
import Link from "next/link";
import {useRouter} from "next/router";

function OnlineDrawer(props) {
    const {
        onClose,
        open,
    } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const router = useRouter();

    function handlePathChange() {
        if (!router.isReady) {
            return
        }

        if (open) onClose?.();
    }

    useEffect(handlePathChange,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.isReady, router.asPath]);

    return (
        <Drawer
            anchor="top"
            open={lgUp && open}
            onClose={() => onClose?.()}
            sx={{
                zIndex: (theme) => theme.zIndex.appBar + 100,
            }}
            PaperProps={{
                sx: {
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    background: theme => theme.palette.background.default
                }
            }}

        >
            <Box
                sx={{
                    pt: 3,
                    px: 3,
                    pb: 8
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Logo
                        sx={{
                            width: 164
                        }}
                    />
                    <IconButton
                        size="small"
                        sx={{
                            ml: "auto"
                        }}
                        onClick={() => onClose?.()}
                    >
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                </Box>
                <List
                    sx={{
                        mt: 4
                    }}
                >
                    <ListItem
                        disablePadding
                        sx={{
                            mb: 2
                        }}
                    >
                        <Typography
                            component={Link}
                            href="/about"
                            color="text.primary"
                            sx={{
                                textDecoration: "none"
                            }}
                        >
                            Biz haqimizda
                        </Typography>
                    </ListItem>
                    <ListItem
                        disablePadding
                        sx={{
                            mb: 2
                        }}
                    >
                        <Typography
                            component={Link}
                            href="/contact"
                            color="text.primary"
                            sx={{
                                textDecoration: "none",
                            }}
                        >
                            Bog&apos;lanish
                        </Typography>
                    </ListItem>
                </List>
                <Button
                    component={Link}
                    href="/"
                    variant="contained"
                    size="small"
                    color="secondary"
                    sx={{
                        width: "100%",
                        mt: 2
                    }}
                >
                    Offline
                </Button>
            </Box>
        </Drawer>
    );
}

OnlineDrawer.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
}

export default OnlineDrawer;